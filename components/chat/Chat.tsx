"use client";

import { useChat } from "@ai-sdk/react";
import { profile } from "@/lib/data";
import { useSidebar } from "../ui/sidebar";
import {
  IconSend,
  IconX,
  IconUser,
  IconRobot,
  IconSparkles,
  IconBriefcase,
  IconCode,
  IconRocket,
  IconUserCircle,
} from "@tabler/icons-react";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

// Helper to extract text content from AI SDK 5 message parts
function getMessageText(message: {
  parts?: Array<{ type: string; text?: string; state?: string }>;
  content?: string;
}): string {
  if (message.parts && Array.isArray(message.parts)) {
    return message.parts
      .filter((part) => part.type === "text" && part.text)
      .map((part) => part.text)
      .join("");
  }
  if (typeof message.content === "string") {
    return message.content;
  }
  return "";
}

// Check if a message is currently streaming
function isMessageStreaming(message: {
  parts?: Array<{ type: string; state?: string }>;
}): boolean {
  if (message.parts && Array.isArray(message.parts)) {
    return message.parts.some(
      (part) => part.type === "text" && part.state === "streaming"
    );
  }
  return false;
}

// Streaming text component with smooth character-by-character animation
function StreamingText({
  text,
  isStreaming,
}: {
  text: string;
  isStreaming: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const targetTextRef = useRef(text);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    targetTextRef.current = text;

    // If we're streaming and have new text to show
    if (text.length > displayedText.length) {
      setIsAnimating(true);

      // Clear any existing animation
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }

      // Animate characters appearing
      const animateText = () => {
        setDisplayedText((prev) => {
          const target = targetTextRef.current;
          if (prev.length < target.length) {
            // Add characters in chunks for smoother feel
            const charsToAdd = Math.min(3, target.length - prev.length);
            const newText = target.slice(0, prev.length + charsToAdd);

            // Schedule next frame
            animationRef.current = setTimeout(animateText, 15);
            return newText;
          }
          setIsAnimating(false);
          return prev;
        });
      };

      animateText();
    } else if (!isStreaming && text.length <= displayedText.length) {
      // When streaming stops, ensure we show full text
      setDisplayedText(text);
      setIsAnimating(false);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [text, isStreaming]);

  // Reset when text is cleared (new conversation)
  useEffect(() => {
    if (text === "" || text.length < displayedText.length - 50) {
      setDisplayedText(text);
    }
  }, [text]);

  const showCursor = isStreaming || isAnimating;

  return (
    <div className="relative">
      <motion.div
        className="text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-1.5 prose-p:leading-relaxed prose-headings:my-2 prose-headings:font-semibold prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5 prose-strong:text-foreground prose-a:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <ReactMarkdown>{displayedText || text}</ReactMarkdown>
        {showCursor && (
          <motion.span
            className="inline-block w-2 h-4 bg-primary/70 rounded-sm ml-0.5 align-middle"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const promptVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 400,
      damping: 25,
    },
  }),
  hover: {
    scale: 1.02,
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  },
  tap: { scale: 0.98 },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export function Chat() {
  const { toggleSidebar } = useSidebar();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isInitialView, setIsInitialView] = useState(true);

  const fullName = `${profile.firstName} ${profile.lastName}`;

  const { messages, status, error, sendMessage } = useChat({
    // Enable frequent UI updates for smooth streaming
    experimental_throttle: 50,
  });

  // Add welcome message if no messages exist
  const displayMessages = useMemo(() => {
    if (messages.length === 0) {
      return [
        {
          id: "welcome",
          role: "assistant" as const,
          parts: [
            {
              type: "text" as const,
              text: `Hi! I'm ${fullName}'s AI assistant. Ask me anything about my work, experience, skills, or projects!`,
            },
          ],
        },
      ];
    }
    return messages;
  }, [messages, fullName]);

  const isLoading = status === "streaming" || status === "submitted";

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [displayMessages, scrollToBottom]);

  useEffect(() => {
    if (displayMessages.length > 1) {
      setIsInitialView(false);
    }
  }, [displayMessages]);

  const suggestedPrompts = [
    {
      label: "Experience",
      prompt: "Tell me about your professional experience",
      icon: IconBriefcase,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Skills",
      prompt: "What technologies do you specialize in?",
      icon: IconCode,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      label: "Projects",
      prompt: "What projects have you worked on?",
      icon: IconRocket,
      gradient: "from-orange-500 to-red-500",
    },
    {
      label: "About",
      prompt: "Tell me about yourself",
      icon: IconUserCircle,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    sendMessage({ text: inputValue });
    setInputValue("");
  };

  const handlePromptClick = (prompt: string) => {
    if (isLoading) return;
    sendMessage({ text: prompt });
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Header with subtle gradient */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3">
          <motion.div animate={pulseAnimation} className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <IconSparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
          </motion.div>
          <div>
            <h2 className="text-base font-semibold">
              {profile.firstName}&apos;s AI
            </h2>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Close chat"
        >
          <IconX className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        <AnimatePresence mode="popLayout">
          {displayMessages.map((message: any) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  delay: 0.1,
                }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                    : isMessageStreaming(message)
                    ? "bg-gradient-to-br from-primary/20 to-primary/10 ring-2 ring-primary/30 ring-offset-1 ring-offset-background"
                    : "bg-gradient-to-br from-muted to-muted/80"
                }`}
              >
                {message.role === "user" ? (
                  <IconUser className="w-4 h-4" />
                ) : isMessageStreaming(message) ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <IconSparkles className="w-4 h-4 text-primary" />
                  </motion.div>
                ) : (
                  <IconRobot className="w-4 h-4" />
                )}
              </motion.div>

              {/* Message Bubble */}
              <motion.div
                initial={{ opacity: 0, x: message.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-tr-md"
                    : isMessageStreaming(message)
                    ? "bg-gradient-to-br from-muted/90 to-muted/70 backdrop-blur-sm rounded-tl-md border border-primary/20"
                    : "bg-muted/80 backdrop-blur-sm rounded-tl-md"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm leading-relaxed">
                    {getMessageText(message)}
                  </p>
                ) : (
                  <StreamingText
                    text={getMessageText(message)}
                    isStreaming={isMessageStreaming(message)}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator - Only show when waiting for first response */}
        <AnimatePresence>
          {isLoading &&
            displayMessages.length > 0 &&
            !isMessageStreaming(
              displayMessages[displayMessages.length - 1]
            ) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center shadow-sm">
                  <IconRobot className="w-4 h-4" />
                </div>
                <div className="bg-muted/80 backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5 items-center h-5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 bg-foreground/40 rounded-full"
                        animate={{
                          y: [0, -6, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
        </AnimatePresence>

        {/* Error Display */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-destructive/10 border border-destructive/20 text-destructive rounded-xl p-3 text-sm"
            >
              <p className="font-medium">Oops! Something went wrong</p>
              <p className="text-xs opacity-80 mt-1">{error.message}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts - Enhanced */}
      <AnimatePresence>
        {isInitialView && displayMessages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
            className="px-4 pb-3"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs text-muted-foreground mb-2 text-center"
            >
              Quick questions to get started
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-2"
            >
              {suggestedPrompts.map((item, index) => (
                <motion.button
                  key={item.label}
                  custom={index}
                  variants={promptVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handlePromptClick(item.prompt)}
                  disabled={isLoading}
                  className="group relative flex items-center gap-2 px-3 py-2.5 bg-muted/50 hover:bg-muted rounded-xl transition-colors text-left overflow-hidden disabled:opacity-50"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area - Enhanced */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={onSubmit}
        className="p-4 border-t bg-background/80 backdrop-blur-sm"
      >
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full px-4 py-3 bg-muted/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-muted transition-all placeholder:text-muted-foreground/60"
              disabled={isLoading}
            />
            {inputValue && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground"
              >
                Press Enter ↵
              </motion.span>
            )}
          </div>
          <motion.button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all"
          >
            <motion.div
              animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
              transition={
                isLoading
                  ? { duration: 1, repeat: Infinity, ease: "linear" }
                  : {}
              }
            >
              <IconSend className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}

export default Chat;

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "julian";
  text: string;
}

const OPENERS: string[] = [
  "Good evening. I'm here, discreetly. What would you like to consider?",
  "Welcome. Whether you are searching for a specific residence or contemplating a legacy move, I'm listening.",
  "A pleasure. Tell me what you are looking for — or what you are quietly considering parting with.",
];

const REPLIES: { match: RegExp; reply: string }[] = [
  {
    match: /island|atoll|private/i,
    reply:
      "Islands are a particular specialism of mine. We currently hold five, from a sovereign-lease atoll in the Maldives to a sealed compound in the Ionian. Each is offered with full infrastructure and a covenant of absolute exclusivity. Would you prefer a tropical latitude or something more temperate?",
  },
  {
    match: /cap ferrat|côte d'?azur|azur|france/i,
    reply:
      "The Cape is, at this moment, the most quietly active market in the practice. Three first-line estates are under sealed offer. If you are contemplating Cap Ferrat specifically, I would suggest we speak rather than write — the window for first-line acquisition is, in practical terms, closing.",
  },
  {
    match: /budget|price|how much|range/i,
    reply:
      "I do not work to a budget; I work to a decision. That said, my practice begins at approximately €20M and the median transaction over the past three years has closed near €42M. If you can share the decision you are trying to make, I can be more useful than any range would be.",
  },
  {
    match: /sell|dispos|parting|let go/i,
    reply:
      "A quiet disposition is, in many ways, the harder transaction — and the one I am most often entrusted with. We would begin with a private valuation, never a public listing, and approach no more than four qualified principals. Shall I outline the process?",
  },
  {
    match: /meet|call|speak|conversation/i,
    reply:
      "I would welcome it. I prefer to begin with a short private conversation rather than correspondence. You can request one through the Contact page, or I can have my office reach out to a number you trust.",
  },
  {
    match: /vineyard|château|chateau|bordeaux|wine/i,
    reply:
      "A classified vineyard is one of the few assets that travels intact across generations. We hold four at present, including a Saint-Émilion grand cru offered as a turnkey legacy — brand, inventory and cellar team included. May I ask whether the interest is investment or dynastic?",
  },
];

function respond(input: string): string {
  const lower = input.toLowerCase();
  for (const r of REPLIES) {
    if (r.match.test(lower)) return r.reply;
  }
  return "Thank you. I will consider that carefully. The most useful next step is usually a short private conversation — would you like me to arrange one, or would you prefer I begin by sending you a discreet selection of estates that fit what you have described?";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      const opener = OPENERS[Math.floor(Math.random() * OPENERS.length)];
      setMessages([{ role: "julian", text: opener }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTyping(true);
    const reply = respond(text);
    const delay = 900 + Math.min(text.length * 18, 1400);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "julian", text: reply }]);
    }, delay);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-gold/30 bg-navy/90 px-5 py-3.5 text-sm text-ivory backdrop-blur-xl transition-all duration-500 hover:border-gold/70",
          open && "pointer-events-none opacity-0"
        )}
        aria-label="Speak with Julian"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
        </span>
        <Sparkles className="h-4 w-4 text-gold" />
        <span className="tracking-[0.18em] uppercase text-[0.7rem]">Speak with Julian</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 flex h-[32rem] w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden border border-gold/20 bg-navy/95 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-gold/10 bg-navy-deep/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                  <MessageCircle className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-base text-ivory">Julian Voss</p>
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold/70">Private line · online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-platinum/70 transition-colors hover:text-gold"
                aria-label="Close conversation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] px-4 py-3 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-gold/15 text-ivory"
                        : "border border-gold/10 bg-charcoal text-platinum/90"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 border border-gold/10 bg-charcoal px-4 py-3.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gold/70"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-gold/10 bg-navy-deep/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Write discreetly…"
                  className="flex-1 bg-transparent px-3 py-2.5 text-sm text-ivory placeholder:text-platinum/40 focus:outline-none"
                />
                <button
                  onClick={send}
                  className="inline-flex h-9 w-9 items-center justify-center border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-navy"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


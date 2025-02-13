// import {
//     AnimatedSpan,
//     Terminal,
//     TypingAnimation,
//   } from "@/registry/magicui/terminal";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className="dark">
      <TypingAnimation className="text-white">&gt; npm run dev</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-white">
        <span>✔ next dev.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-[#D570D6] mt-3">
        <span> ▲ Next.js 15.1.4</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-white">
        <span> - Local: http://localhost:3000</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-white">
        <span> - Network: http://192.168.0.100:3000</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span> ✓ Starting...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span> ✓ Ready in 1755ms</span>
      </AnimatedSpan>

      {/* <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Updating tailwind.config.ts</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Updating app/globals.css</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Installing dependencies.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- lib/utils.ts</span>
      </AnimatedSpan> */}

      <TypingAnimation delay={6500} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>

      {/* <TypingAnimation delay={7000} className="text-muted-foreground">
        You may now add components.
      </TypingAnimation> */}
    </Terminal>
  );
}

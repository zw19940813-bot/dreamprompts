diff --git a/C:\Users\admin\Documents\Codex\2026-06-28\prd-dreamprompts-net-dreamprompts-dreamprompts-net\app\page.tsx b/C:\Users\admin\Documents\Codex\2026-06-28\prd-dreamprompts-net-dreamprompts-dreamprompts-net\app\page.tsx
--- a/C:\Users\admin\Documents\Codex\2026-06-28\prd-dreamprompts-net-dreamprompts-dreamprompts-net\app\page.tsx
+++ b/C:\Users\admin\Documents\Codex\2026-06-28\prd-dreamprompts-net-dreamprompts-dreamprompts-net\app\page.tsx
@@ -1,3 +1,2 @@
 import Link from 'next/link'
-import { ArrowDown, ArrowUpRight } from 'lucide-react'
 import { AdSlot } from '@/components/ad-slot'
@@ -10,13 +9,2 @@
   return <>
-    <section className="overflow-hidden border-b border-black/[.06]">
-      <div className="container-shell relative py-20 md:py-28 lg:py-36">
-        <div className="pointer-events-none absolute -right-48 -top-52 h-[620px] w-[620px] rounded-full bg-blue/[.07] blur-3xl" />
-        <div className="relative max-w-5xl">
-          <div className="eyebrow mb-7 flex items-center gap-3 text-blue"><span className="h-px w-8 bg-blue" />Independent ideas for the AI-curious</div>
-          <h1 className="serif text-balance text-[clamp(3.4rem,9vw,8rem)] font-bold leading-[.9] tracking-[-.065em]">Better prompts.<br /><em className="font-normal text-blue">Brighter ideas.</em></h1>
-          <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-muted md:text-xl">Field-tested prompts, lucid workflows, and creative direction for people who want more from AI than the first answer.</p>
-          <div className="mt-9 flex flex-wrap gap-3"><Link href="/library" className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#154fe4]">Browse the library <ArrowUpRight size={16} /></Link><Link href="#latest" className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold transition hover:border-black/30">Read the latest <ArrowDown size={16} /></Link></div>
-        </div>
-      </div>
-    </section>
     <section id="latest" className="container-shell scroll-mt-24 py-20 md:py-28">

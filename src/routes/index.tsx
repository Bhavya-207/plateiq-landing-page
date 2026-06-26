import { createFileRoute } from "@tanstack/react-router";
import { Camera, Sparkles, BarChart3, Heart, Leaf, Upload } from "lucide-react";
import heroPlate from "@/assets/hero-plate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PlateIQ — Know Your Plate. Eat Smarter." },
      {
        name: "description",
        content:
          "Snap a photo of your meal and get instant AI-powered nutrition insights, a health score, and timeless wisdom from mom.",
      },
      { property: "og:title", content: "PlateIQ — Know Your Plate. Eat Smarter." },
      {
        property: "og:description",
        content:
          "Snap a photo of your meal and get instant AI-powered nutrition insights, a health score, and timeless wisdom from mom.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Camera,
    title: "AI Food Detection",
    desc: "Point, shoot, done. Our vision model identifies ingredients down to the garnish.",
  },
  {
    icon: BarChart3,
    title: "Nutrition Analysis",
    desc: "Calories, macros and micros — broken down per ingredient in seconds.",
  },
  {
    icon: Sparkles,
    title: "Health Score",
    desc: "A single number that tells you how well this plate fits your goals.",
  },
  {
    icon: Heart,
    title: "Mom's Wisdom",
    desc: "Warm, practical advice that feels less like a lecture and more like home.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">PlateIQ</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition hover:text-foreground">Features</a>
          <a href="#how" className="transition hover:text-foreground">How it works</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
        </nav>
        <a
          href="#upload"
          className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition hover:bg-secondary md:inline-block"
        >
          Sign in
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pt-16">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI-powered nutrition, beautifully simple
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
              Know Your Plate.{" "}
              <span className="italic text-primary">Eat Smarter.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Upload a photo of any meal and PlateIQ instantly breaks down its
              nutrition, scores its healthiness, and shares a little wisdom from mom.
            </p>

            <div id="upload" className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-glow transition hover:opacity-95 active:scale-[0.98]"
              >
                <Upload className="h-4 w-4 transition group-hover:-translate-y-0.5" />
                Upload Food
              </button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-foreground/80 transition hover:text-foreground"
              >
                See how it works →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-foreground">2M+</div>
                meals analyzed
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-foreground">98%</div>
                ingredient accuracy
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-leaf-soft via-cream-deep to-zest-soft blur-2xl opacity-70" />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
              <img
                src={heroPlate}
                alt="A vibrant bowl with chicken, avocado, quinoa, tomatoes and citrus"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Health Score</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Excellent
                </span>
              </div>
              <div className="mt-2 font-display text-4xl font-semibold">92<span className="text-base text-muted-foreground">/100</span></div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[92%] rounded-full bg-primary" />
              </div>
            </div>
            <div className="absolute -right-3 top-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
              <div className="flex items-center gap-2 text-sm">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent/15 text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">412 kcal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            What's inside
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
            A pocket nutritionist, served warm.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl ${
                  i % 2 === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/15 text-accent"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-3.5 w-3.5" />
            </span>
            <span className="font-display text-lg font-semibold">PlateIQ</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PlateIQ. Made with good ingredients.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition hover:text-foreground">Privacy</a>
            <a href="#" className="transition hover:text-foreground">Terms</a>
            <a href="#" className="transition hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

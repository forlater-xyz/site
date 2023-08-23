import ThingsToEmail from "@/components/ThingsToEmail";

const lightGrey = "rgb(205 205 205)";
const footer = "rgb(205 205 205 / 40%)";

interface props {
  email: string;
  prefix: string;
}

function EmailLink({ email, prefix }: props) {
  return (
    <a className="email-link" href={`mailto:${email}`}>
      <span className="email-link-red">{prefix}</span>
      <span className="email-link-grey">@</span>
      <span className="email-link-blue">for</span>
      <span className="email-link-green">later</span>
      <span className="email-link-grey">.</span>
      <span className="email-link-yellow">xyz</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex container mx-auto min-h-screen flex-col justify-between px-12 pb-6">
      <div className="flex flex-col justify-center grow">
        <h1
          style={{
            fontSize: "clamp(1rem, -0.675rem + 23.333vw, 12rem)",
            textShadow: "1px 1px 4px black",
          }}
          className="font-bold leading-none"
        >
          <a className="email-link" href="mailto:save@forlater.xyz">
            <span className="email-link-red">save</span>
            <span className="email-link-grey">@</span>
            <br />
            <span className="email-link-blue">for</span>
            <span className="email-link-green">later</span>
            <br />
            <div style={{ lineHeight: 0.8 }}>
              <span className="email-link-grey">.</span>
              <span className="email-link-yellow">xyz</span>
            </div>
          </a>
        </h1>
      </div>
      <div>
        <h3
          className="text-2xl lg:text-4xl font-bold mt-12"
          style={{ color: lightGrey }}
        >
          <p className="my-4">
            Email <EmailLink email="save@forlater.xyz" prefix="save" />
            <br />
            with <ThingsToEmail />
          </p>
          <p className="my-4">
            Email <EmailLink email="ask@forlater.xyz" prefix="ask" />
            <br />
            with what you&apos;re looking for and we&apos;ll send it right back!
          </p>
        </h3>
        <footer style={{ color: footer }} className="mt-12">
          Made in SF by <a className="underline" href="https://mkly.io">Mike</a>
        </footer>
      </div>
    </main>
  );
}

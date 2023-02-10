import React from "react";

const About = () => {
  return (
    <article className="relative flex flex-col gap-8 w-full min-h-[90vh] justify-center items-center py-16">
      <header>
        <h1 className="text-4xl font-bold">About TEDx</h1>
      </header>
      <main className="flex flex-col gap-6 px-16">
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">
            About TEDx, x = independently organized event
          </h2>
          <p className="text-tedx-white/80">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">About TED</h2>
          <p className="text-tedx-white/80">
            TED is a nonprofit organization devoted to Ideas Worth Spreading.
            Started as a four-day conference in California 30 years ago, TED has
            grown to support its mission with multiple initiatives. The two
            annual TED Conferences invite the world's leading thinkers and doers
            to speak for 18 minutes or less. Many of these talks are then made
            available, free, at TED.com. TED speakers have included Bill Gates,
            Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel
            Kahneman.
          </p>
          <p className="text-tedx-white/80">
            The annual TED Conference takes place each spring in Vancouver,
            British Columbia. TED's media initiatives include TED.com, where new
            TED Talks are posted daily; TED Translators, which provides
            subtitles and interactive transcripts as well as translations from
            volunteers worldwide; the educational initiative TED-Ed. TED has
            established The Audacious Project that takes a collaborative
            approach to funding ideas with the potential to create change at
            thrilling scale; TEDx, which supports individuals or groups in
            hosting local, self- organized TED-style events around the world,
            and the TED Fellows program, helping world-changing innovators from
            around the globe to amplify the impact of their remarkable projects
            and activities.
          </p>
        </section>
        <section>
          <h3 className="text-lg text-center font-semibold py-6 mb-6 md:mb-0">
            Follow TED on <a href="https://twitter.com/TEDtTalks">twitter</a>{" "}
            and <a href="https://www.facebook.com/TED">Facebook</a>
          </h3>
        </section>
      </main>
      <footer className="absolute bottom-0 left-0 bg-tedx-white text-tedx-dark w-full text-center py-6">
        This independent TEDx event is operated under license from{" "}
        <span className="font-bold tracking-wide">TED</span>.
      </footer>
    </article>
  );
};

export default About;

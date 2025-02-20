import { Link } from "react-router"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Lets goo */}
      {/* Header */}
  
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 pt-32">
        <h1 className="text-4xl font-bold text-center mb-16">ABOUT US</h1>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-4">ABOUT TEDx, x = INDEPENDENTLY ORGANIZED EVENT</h2>
              <p className="text-gray-300 leading-relaxed">
                IN THE SPIRIT OF IDEAS WORTH SPREADING, TEDx IS A PROGRAM OF LOCAL, SELF-ORGANIZED EVENTS THAT BRING
                PEOPLE TOGETHER TO SHARE A TED-LIKE EXPERIENCE. AT A TEDx EVENT, TED TALKS VIDEO AND LIVE SPEAKERS
                COMBINE TO SPARK DEEP DISCUSSION AND CONNECTION. THESE LOCAL, SELF-ORGANIZED EVENTS ARE BRANDED TEDx,
                WHERE x = INDEPENDENTLY ORGANIZED TED EVENT. THE TED CONFERENCE PROVIDES GENERAL GUIDANCE FOR THE TEDx
                PROGRAM, BUT INDIVIDUAL TEDx EVENTS ARE SELF-ORGANIZED. (SUBJECT TO CERTAIN RULES AND REGULATIONS.)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">ABOUT TED</h2>
              <p className="text-gray-300 leading-relaxed">
                TED IS A NONPROFIT ORGANIZATION DEVOTED TO IDEAS WORTH SPREADING. STARTED AS A FOUR-DAY CONFERENCE IN
                CALIFORNIA 30 YEARS AGO, TED HAS GROWN TO SUPPORT ITS MISSION WITH MULTIPLE INITIATIVES. THE TWO ANNUAL
                TED CONFERENCES INVITE THE WORLD'S LEADING THINKERS AND DOERS TO SPEAK FOR 18 MINUTES OR LESS. MANY OF
                THESE TALKS ARE THEN MADE AVAILABLE, FREE, AT TED.COM. TED SPEAKERS HAVE INCLUDED BILL GATES, JANE
                GOODALL, ELIZABETH GILBERT, SIR RICHARD BRANSON, NANDAN NILEKANI, PHILIPPE STARCK, NGOZI OKONJO-IWEALA,
                SAL KHAN AND DANIEL KAHNEMAN.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                THE ANNUAL TED CONFERENCE TAKES PLACE EACH SPRING IN VANCOUVER, BRITISH COLUMBIA. TED'S MEDIA
                INITIATIVES INCLUDE TED.COM, WHERE NEW TED TALKS ARE POSTED DAILY; TED TRANSLATORS, WHICH PROVIDES
                SUBTITLES AND INTERACTIVE TRANSCRIPTS AS WELL AS TRANSLATIONS FROM VOLUNTEERS WORLDWIDE; THE EDUCATIONAL
                INITIATIVE TED-ED. TED HAS ESTABLISHED THE AUDACIOUS PROJECT THAT TAKES A COLLABORATIVE APPROACH TO
                FUNDING IDEAS WITH THE POTENTIAL TO CREATE CHANGE AT THRILLING SCALE; TEDx, WHICH SUPPORTS INDIVIDUALS
                OR GROUPS IN HOSTING LOCAL, SELF-ORGANIZED TED-STYLE EVENTS AROUND THE WORLD, AND THE TED FELLOWS
                PROGRAM, HELPING WORLD-CHANGING INNOVATORS FROM AROUND THE GLOBE TO AMPLIFY THE IMPACT OF THEIR
                REMARKABLE PROJECTS AND ACTIVITIES.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <h2 className="text-xl font-semibold">OUR PAST EVENTS</h2>
            <div className="space-y-4">
              {[2022, 2023, 2024].map((year) => (
                <div key={year} className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Follow Us Section */}
      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-8">FOLLOW US ON</h2>
        <div className="flex justify-center space-x-8">
          <Link to="#" className="p-2 hover:text-purple-500">
            <Facebook className="w-8 h-8" />
          </Link>
          <Link to="#" className="p-2 hover:text-purple-500">
            <Twitter className="w-8 h-8" />
          </Link>
          <Link to="#" className="p-2 hover:text-purple-500">
            <Instagram className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}


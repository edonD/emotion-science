export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="font-mono text-sm font-semibold tracking-wider mb-4">
              EMOTIONLENS
            </p>
            <p className="text-xs text-muted leading-relaxed">
              Evidence-based emotion recognition training. Built on FACS
              research, designed for professionals.
            </p>
          </div>

          {/* Training */}
          <div>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Training
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="#courses" className="hover:text-foreground transition-colors">
                  Foundations — $89
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-foreground transition-colors">
                  Professional — $229
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-foreground transition-colors">
                  Expert Mastery — $399
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-foreground transition-colors">
                  Curriculum Overview
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Learn
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="#science" className="hover:text-foreground transition-colors">
                  The 7 Emotions
                </a>
              </li>
              <li>
                <a href="#facs" className="hover:text-foreground transition-colors">
                  FACS System
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How Training Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold tracking-wider mb-4 text-muted uppercase">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:team@emotionlens.com" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:team@emotionlens.com" className="hover:text-foreground transition-colors">
                  Team Licensing
                </a>
              </li>
              <li>
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-foreground transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 EmotionLens. All rights reserved.
          </p>
          <div className="text-xs text-muted font-mono">
            <span>Research-backed</span>
            <span className="mx-3">·</span>
            <span>FACS-aligned</span>
            <span className="mx-3">·</span>
            <span>Evidence-based</span>
          </div>
        </div>

        {/* Research citations */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] text-muted/60 leading-relaxed">
            Research citations: Ekman, P. & Friesen, W.V. (1971). Constants
            across cultures in the face and emotion. Journal of Personality and
            Social Psychology. · Matsumoto, D. & Hwang, H.S. (2011). Evidence
            for training the ability to read microexpressions of emotion.
            Motivation and Emotion. · Hurley, C.M. et al. (2014). Background
            factors predicting accuracy and improvement in micro expression
            recognition. Motivation and Emotion. · Ekman, P., Friesen, W.V. &
            Hager, J.C. (2002). Facial Action Coding System (2nd ed.).
          </p>
        </div>
      </div>
    </footer>
  );
}

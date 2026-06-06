import { Mic, Send } from 'lucide-react';

export default function HelpPanel() {
  return (
    <article className="help-panel">
      <h2>Need Help?</h2>
      <p>Our AI assistant is here to help you</p>
      <form className="question-box">
        <Mic size={22} />
        <input aria-label="Question" placeholder="Type your question..." />
        <button aria-label="Send question" type="button">
          <Send size={22} />
        </button>
      </form>
    </article>
  );
}

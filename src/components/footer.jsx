import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-gray-900 text-neutral-content p-8 lg:px-12 ">
        <aside>
          <p className="text-xs opacity-60">
            Prashan Kulathunga
            <br />
            Providing reliable tech anytime
          </p>
        </aside>
        <nav className="flex  gap-4 h-full items-center">
          <h6 className="footer-title pt-2">Social Follow Me</h6>
          <div>
            <a href="https://www.facebook.com/share/1Nntnyyoaf/?mibextid=wwXIfr" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;

<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> portfolio/main
import { servicesData } from "/src/components/data/data.js";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

<<<<<<< HEAD
  const activeService = useMemo(() => {
    if (activeModal === null) return null;
    return servicesData[activeModal] ?? null;
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeService) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [activeService]);

=======
>>>>>>> portfolio/main
  return (
    <section className="services section" id="services">
      <h2 className="section-title" data-heading="Services">What I Offer</h2>

      <div className="services-container container grid">
        {servicesData.map((s, i) => (
          <div className="services-content" key={i}>
            <div>
              <i className={`${s.icon} services-icon`} />
              <h3 className="services-title">
                {s.title.split("\n").map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </h3>
            </div>
<<<<<<< HEAD
            <button
              type="button"
              className="services-button"
              onClick={() => setActiveModal(i)}
              aria-haspopup="dialog"
              aria-expanded={activeModal === i}
            >
              View More <i className="uil uil-arrow-right services-button-icon" />
            </button>
          </div>
        ))}
      </div>

      <div
        className={`services-modal${activeService ? " active-modal" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!activeService}
        aria-labelledby="services-modal-title"
        onClick={closeModal}
      >
        {activeService && (
          <div className="services-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="services-modal-close"
              onClick={closeModal}
              aria-label="Close services modal"
            >
              <i className="uil uil-times" />
            </button>
            <h3 className="services-modal-title" id="services-modal-title">
              {activeService.modal.title}
            </h3>
            <p className="services-modal-description">{activeService.modal.description}</p>
            <ul className="services-modal-services grid">
              {activeService.modal.items.map((item, j) => (
                <li className="services-modal-service" key={j}>
                  <i className="uil uil-check-circle services-modal-icon" />
                  <p className="services-modal-info">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
=======
            <button className="services-button" onClick={() => setActiveModal(i)}>
              View More <i className="uil uil-arrow-right services-button-icon" />
            </button>

            {/* Modal */}
            <div className={`services-modal${activeModal === i ? " active-modal" : ""}`}>
              <div className="services-modal-content">
                <button className="services-modal-close" onClick={() => setActiveModal(null)}>
                  <i className="uil uil-times" />
                </button>
                <h3 className="services-modal-title">{s.modal.title}</h3>
                <p className="services-modal-description">{s.modal.description}</p>
                <ul className="services-modal-services grid">
                  {s.modal.items.map((item, j) => (
                    <li className="services-modal-service" key={j}>
                      <i className="uil uil-check-circle services-modal-icon" />
                      <p className="services-modal-info">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
>>>>>>> portfolio/main
    </section>
  );
};

export default Services;

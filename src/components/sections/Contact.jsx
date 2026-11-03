import { site } from "../../content/site";
import Icon from "../Icon";

const details = [
  {
    icon: "email",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "location",
    label: "Location",
    value: `${site.location.city}, ${site.location.country}`,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          {site.copy.contactIntro}
        </p>

        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {site.copy.contactDetail}
            </p>
          </div>

          <div className="space-y-4">
            {details.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Icon name={detail.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {detail.label}
                  </h4>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">
              Socials
            </h4>
            <div className="flex space-x-4">
              {site.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200"
                >
                  <Icon name={social.id} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

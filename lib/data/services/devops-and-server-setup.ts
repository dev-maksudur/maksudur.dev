import { ServicePageData } from "./types";

export const devopsAndServerSetup: ServicePageData = {
  id: "devops-and-server-setup",
  slug: "devops-and-server-setup",
  title: "DevOps & Server Setup Engineer | AWS EC2, aaPanel & Linux Deployment",
  heading: "Linux Server Setup, aaPanel, AWS EC2 & DevOps Deployment Services",
  subheading: "End-to-end cloud server configuration, aaPanel installation, AWS EC2 provisioning, free SSL certificates, domain DNS mapping, and production application deployments.",
  metaDescription: "Need reliable server setup or cloud deployment? Hire a developer for AWS EC2 configuration, aaPanel setup, free SSL install, Nginx web server tuning, and domain DNS setup.",
  keywords: [
    "server setup service",
    "aapanel setup",
    "aws ec2 setup",
    "free ssl certificate setup",
    "linux server deployment",
    "nginx web server setup",
    "devops freelancer"
  ],
  intro: [
    "Setting up a reliable cloud server shouldn't be a roadblock for your business or software project. While cloud providers and VPS hosts offer immense computing power, navigating terminal commands, firewall configurations, DNS records, web server blocks, and database permissions can quickly become overwhelming. A single misconfigured parameter or unmaintained security group can lead to server crashes, database lockouts, or vulnerability to malicious traffic.",
    "I provide practical, end-to-end server setup and DevOps deployment services for developers, agencies, and business owners. Whether you need a fresh Ubuntu or Debian server provisioned, an AWS EC2 instance properly secured with elastic IP and security groups, aaPanel installed for hassle-free visual hosting management, or automated Let's Encrypt SSL certificates configured, I handle the foundational system administration tasks cleanly and reliably.",
    "From pointing your domain name via Cloudflare or your registrar to configuring Nginx reverse proxies, Supervisor queue daemons, and PM2 process managers, I ensure your application environment is fast, stable, and ready for production traffic. I focus on practical solutions that you can easily maintain without expensive ongoing cloud overhead."
  ],
  offers: [
    {
      title: "AWS EC2 & Cloud VPS Provisioning",
      desc: "Setting up and configuring Linux instances on AWS EC2, DigitalOcean, Linode, Vultr, or Hetzner. I configure SSH key authentication, Elastic IPs, volume attachments, and strict security groups."
    },
    {
      title: "aaPanel & Control Panel Installation",
      desc: "Installing and securing aaPanel on your VPS for a clean, visual web hosting control center. Setting up LNMP/LAMP stacks, phpMyAdmin, FTP, and intuitive multi-website management."
    },
    {
      title: "Free SSL Certificate & Auto-Renewal Setup",
      desc: "Installing free SSL/TLS certificates using Let's Encrypt Certbot with automated renewal cron jobs. Configuring Cloudflare SSL modes (Flexible / Full Strict) and forcing HTTPS redirects."
    },
    {
      title: "Nginx & Apache Web Server Tuning",
      desc: "Configuring high-performance Nginx server blocks and virtual hosts. Setting up reverse proxies for Node.js/Next.js/Python apps, Gzip compression, client upload limits, and HTTP/2."
    },
    {
      title: "Domain DNS & Nameserver Configuration",
      desc: "Mapping domain DNS records (A, CNAME, MX, TXT) with Cloudflare, Namecheap, GoDaddy, or Route 53. Ensuring fast global propagation and setting up DDoS proxy protection."
    },
    {
      title: "Database Server & phpMyAdmin Setup",
      desc: "Installing and securing MySQL, PostgreSQL, or Redis. Creating dedicated database users, restricting external network access, and configuring phpMyAdmin or Adminer for GUI management."
    },
    {
      title: "Process Managers & Task Scheduling",
      desc: "Setting up PM2 to keep Node.js / Next.js apps running with auto-restart on boot, Supervisor for Laravel background queue workers, and Linux cron jobs for automated tasks."
    },
    {
      title: "Basic Server Security & Firewall Hardening",
      desc: "Securing your server against common attacks. I configure UFW firewall rules, disable root password logins, set up SSH key pairs, and configure Fail2ban to block brute-force attempts."
    }
  ],
  experienceHighlight: "Across my software engineering career and freelance client work, I routinely configure cloud servers, containerize applications, and manage production hosting environments. I have deployed high-traffic Laravel platforms, Next.js web applications, and database clusters on AWS EC2, DigitalOcean, and dedicated VPS servers.",
  caseStudies: [
    "AWS EC2 Production Setup: Provisioned and hardened Ubuntu 22.04 LTS EC2 instances on AWS with custom security groups, elastic IP assignment, and Nginx reverse proxy routing.",
    "aaPanel Multi-Site Hosting: Configured aaPanel environments for client agencies, enabling intuitive one-click deployments of multiple PHP, Laravel, and WordPress websites on a single VPS.",
    "Zero-Downtime SSL Automation: Configured automated Let's Encrypt Certbot SSL renewal scripts and Cloudflare proxy SSL rules across multiple client web portals.",
    "Queue Worker & Process Daemon: Configured Linux Supervisor and PM2 process managers to keep background workers and Node.js applications continuously running with automatic crash recovery."
  ],
  technologies: [
    {
      name: "Cloud & VPS Platforms",
      items: ["AWS EC2", "DigitalOcean Droplets", "Linode / Akamai", "Hetzner Cloud", "Vultr VPS"]
    },
    {
      name: "Control Panels",
      items: ["aaPanel", "cPanel / WHM", "Webmin", "phpMyAdmin", "Adminer"]
    },
    {
      name: "Web Servers & Proxy",
      items: ["Nginx Server Blocks", "Apache Virtual Hosts", "Nginx Reverse Proxy", "Cloudflare DNS & CDN"]
    },
    {
      name: "Security & Protocols",
      items: ["Let's Encrypt Certbot", "UFW Firewall", "SSH Key-Pair Auth", "Fail2ban", "HTTPS & HSTS"]
    },
    {
      name: "Runtimes & Process Managers",
      items: ["PHP 8.x & PHP-FPM", "Node.js & NPM", "PM2 Process Manager", "Linux Supervisor", "Cron Schedulers"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Requirements & Infrastructure Planning",
      desc: "We discuss your application requirements, expected traffic, and budget. I recommend the optimal cloud provider (AWS EC2, DigitalOcean, Hetzner) and server specifications."
    },
    {
      step: "02",
      title: "Server Provisioning & Security Hardening",
      desc: "I provision the Linux OS, create non-root administrative users, configure SSH key-pair authentication, disable password login, and set up UFW firewall rules."
    },
    {
      step: "03",
      title: "Control Panel & Runtime Installation",
      desc: "I install aaPanel (or configure headless Nginx/Apache), set up the desired PHP and Node.js versions, and install and secure MySQL/PostgreSQL databases."
    },
    {
      step: "04",
      title: "Domain DNS & SSL Certificate Setup",
      desc: "I map your domain DNS records via Cloudflare or your registrar, generate free Let's Encrypt SSL certificates, and configure automated certificate renewal."
    },
    {
      step: "05",
      title: "Application Deployment & Final Handover",
      desc: "I deploy your codebase (Laravel, Next.js, Node, WordPress), configure `.env` variables, test web routes, set up process managers/cron jobs, and deliver a clear access handover."
    }
  ],
  faqs: [
    {
      question: "Can you install and configure aaPanel on my VPS?",
      answer: "Yes, absolutely! I specialize in setting up aaPanel on fresh Ubuntu, Debian, or CentOS servers. I install the web server stack (Nginx/Apache), PHP versions, MySQL database, and phpMyAdmin, giving you a friendly graphical interface to manage your websites and files."
    },
    {
      question: "What is included in the AWS EC2 setup service?",
      answer: "My AWS EC2 setup covers launching the appropriate EC2 instance type (e.g. t3/t4g), attaching and formatting EBS storage, allocating and associating Elastic IPs (static public IP), configuring Security Groups to allow only required ports (SSH, HTTP, HTTPS), and setting up your application environment."
    },
    {
      question: "Are the SSL certificates free, and do they auto-renew?",
      answer: "Yes! I install standard industry-grade SSL/TLS certificates from Let's Encrypt, which are 100% free and recognized by all major browsers. I also set up automated cron jobs via Certbot so the certificates renew automatically without manual intervention."
    },
    {
      question: "Can you help point my domain name to the new server?",
      answer: "Yes, I configure your DNS records (A records, CNAMEs, MX records, TXT verification records) using your domain registrar (Namecheap, GoDaddy, Google Domains) or Cloudflare. I also configure Cloudflare proxy and security rules if desired."
    },
    {
      question: "Will you deploy my Laravel, Next.js, or WordPress site as well?",
      answer: "Yes! Once the server and control panel are ready, I can clone your Git repository, set up dependencies (Composer / NPM), configure environment variables, run database migrations, and configure PM2 or Supervisor to keep everything running seamlessly."
    },
    {
      question: "What access do I need to provide you to get started?",
      answer: "To set up your server, you will typically need to provide SSH root access (or sudo user) and IP address of your VPS. If setting up from scratch on AWS, you can provide temporary IAM credentials or screen-share access. For domain mapping, temporary registrar or Cloudflare access is required."
    }
  ]
};

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
      <div className="lg:col-span-2 space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
           Hello, and welcome to my blog!<br/><br/>

My name is <b>Ryan</b> a tech enthusiast living in <b>Bogor, Indonesia</b>. My main interest in <b>Information Technology</b> started since I was at <b>junior high school</b>. That time, I had built some PCs, over-clocked them, enjoyed some gaming, and hardware optimization.<br/><br/>

Later on, in high school at <b>SMKN 3 Bogor</b>, I majored in <b>Computer and Network Engineering</b>. I competed in the most prestigious <b>CISCO Netriders Competition</b> in Semarang and represented my school at national level.<br/><br/>

In high school, I was introduced to coding through <b>PHP</b>, which further deepened my interest and continued through college. I am not an expert, but I learn and improve every day. I have worked with <b>Docker</b>, <b>Kubernetes</b>, <b>virsh/KVM</b>, <b>OpenStack</b>, <b>Grafana</b>, <b>Prometheus</b>, and <b>Linux</b>. For coding, I know <b>PHP</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Python</b>, <b>Bash</b>, and frameworks like <b>Next.js</b> and <b>Tailwind CSS</b>.<br/><br/>
          </p>
          
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
My key strengths include:<br/><br/>

• Designing efficient logic flows for <b>automation</b> and systems<br/>
• <b>CI/CD</b> pipeline creation<br/>
• Troubleshooting and analyzing <b>Linux server</b> issues <br/>
• Analysis and optimization of <b>system workflows</b><br/>
• <b>Web development</b>, creating responsive, scalable applications, and designing the logic flow<br/>
• Problem-solving through in-depth analysis and debugging<br/><br/>

In my free time, I enjoy:<br/>
• Trying out <b>new technologies</b><br/>
• <b>Trekking</b>, <b>Jogging</b>, <b>Nature walks</b><br/>
• <b>Reading books/e-books</b><br/><br/>


I believe in <b>growth</b>, both <b>personal</b> and <b>professional</b>, and in creating <b>solutions</b> that will actually bring a change.<br/><br/>

Thanks for visiting—feel free to connect or check out my projects here. Let&apos;s <b>innovate</b> and <b>grow together</b>!
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 text-neutral-800 dark:text-neutral-300">Current Focus</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Cloud Architecture',
              'Infrastructure Automation',
              'Web Development',
              'Cloud-Native Apps'
            ].map((focus) => (
              <span 
                key={focus}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-600 dark:text-neutral-400 rounded-full text-sm"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import './App.css'

function App() {
  return <div style={{ background: '#dfe6e9' }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div>
          <br />
          <PostComponent
            name={"Jatin Kumar"}
            description={"CTO @ Scaninfoga"}
            image={"https://media.licdn.com/dms/image/v2/D5603AQEpIGD8Ux0KEg/profile-displayphoto-shrink_100_100/B56ZT5z0pDGsAU-/0/1739357901930?e=1755734400&v=beta&t=zy19bJQIERZfBvO9uHUvXMJnzYlTFDje0Y01sExOQsI"}
            post={"🚨 We’re Hiring Cyber Security Interns! 🔐I am looking for passionate Cyber Security Interns to join our team!🧠 If you’re someone who lives and breathes VAPT (Vulnerability andPenetration Testing) and loves finding bugs that others miss — we want to hear you.📍 Location: Remote (Preferred: Gurugram, Delhi NCR)🕒 Internship Type: Remote | Flexible hours📅 Duration: 3 month’s✅ What we’re looking for:• Solid understanding of VAPT methodologies• Hands-on skills in Web and Network Pentesting• Certifications like CEH, eJPT, or any equivalent experience• Knowledge of tools like Burp Suite, Nmap, Nessus, etc.• Curiosity, passion, and a hunger to learn🎯 If you’ve been waiting for the right opportunity to break into cybersecurityindustry and work alongside experienced professionals — this is it!📩 To apply, send your resume or LinkedIn profile. Over DM..Let’s secure the digital world — one bug at a time. 🛡️hashtag#CyberSecurity hashtag#InternshipOpportunity hashtag#hashtag#CEHhashtag#BugBounty hashtag#InfoSec hashtag#hashtag#RemoteInternshiphashtag#HiringInterns hashtag#GurugramJobs"}
            time={"27m • Edited • "}
          />
          <br />
        </div>
        <div>
          <br />
          <PostComponent
            name={"Ajay Beniwal"}
            description={"Cyber Crusader | THM{Jr. Penetration Tester} | DCSP |"}
            post={"🚨 Certified: Jr. Penetration Tester (TryHackMe) 🛡️💻Im excited to share a major milestone in my cybersecurity journey — I’ve officially earned the Jr. Penetration Tester certification from TryHackMe! ✅🔍This certificate validates hands-on skills in:🔸 Network enumeration🔸 Vulnerability assessment🔸 Exploitation techniques🔸 Web application testing🔸 Privilege escalation🔸 Real-world CTF-style simulation🔸 Report writing and methodology Through countless labs, red team challenges, and simulated environments, I’ve deepened my understanding of offensive security — from scanning networks and cracking passwords to exploiting misconfigurations and post-exploitation tactics.This is more than a certificate — its a stepping stone towards becoming a professional  and contributing to a safer digital world. 🔐📍 Next steps? Diving deeper into real-world engagements, bug bounty hunting, and continuing to grow in the cybersecurity field.If youre also exploring ethical hacking or breaking into the field, I highly recommend the structured and practical paths offered by TryHackMe.📢 Open to internship and collaboration opportunities in:Penetration TestingSOC Analyst RolesVulnerability AssessmentCybersecurity ResearchLet’s connect and secure the future together! 🚀hashtag#PenetrationTesting hashtag#EthicalHacking hashtag#TryHackMe hashtag#JrPenetrationTester hashtag#BugBounty hashtag#NetworkSecurity hashtag#HackerMindset hashtag#RedTeam hashtag#VulnerabilityAssessment hashtag#SOCAnalyst hashtag#SecurityTesting hashtag#Linux hashtag#WebSecurity hashtag#PrivilegeEscalation hashtag#OffensiveSecurity hashtag#TryHackMeCertified hashtag#BlueTeam Celebrating my new certification!"}
            image={"https://media.licdn.com/dms/image/v2/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1660002772504?e=1750752000&v=beta&t=MhZuXMWUffyaXtol85hWy0z3C_AS1v3Txl82nuzb6RY"}
            time={"27m • Edited • "}
          />
          <br />
        </div>
        <div>
          <br />
          <PostComponent
            name={"LinkedIn"}
            description={"Promoted"}
            post={"Personalize your search—filter jobs by location, experience level, benefits, and more. https://lnkd.in/gq8Rc6wS"}
            image={"https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1755734400&v=beta&t=so2d3MeekeffJDyU0aoqgyVMIu7XAilXmfIGnl4n01Q"}
          />
          <br />
        </div>
      </div>
    </div>
  </div>
}

const style = { width: 600, backgroundColor: 'white', borderRadius: 10, borderColor: 'gray', borderWidth: 1, padding: 20 }

function PostComponent({ name, description, time, image, post }) {
  return <div style={style}>

    <div style={{ display: 'flex' }}>
      <img src={image} style={{
        width: 30,
        height: 30,
        borderRadius: 20,
      }} />
      <div style={{ fonstSize: 10, marginLeft: 10 }}>
        <b>
          {name}
        </b>
        <div>{description}</div>
        {time && <div style={{display:"flex"}}>
          <div>{time}</div>
          <img src="data:image/jpeg;base64,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" alt="" style={{width:15,height:15, marginLeft:4, marginTop:1}}/>
        </div>}
      </div>
    </div>
    <div>
      {post}
    </div>
  </div>
}


export default App

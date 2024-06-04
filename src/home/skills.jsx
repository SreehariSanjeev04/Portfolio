import SkillCard from "./skillcard";
import smartphone from '../assets/smartphone.png';
import web from '../assets/ux.png';
import dsa from '../assets/hierarchy-structure.png';
function Skill() {
    const skills = [
        { imageURL: smartphone, heading: 'App Development', description: "I've built mobile apps using Flutter, Google's toolkit for creating beautiful and fast apps for Android and iOS. And for handling the backend stuff, I've turned to Firebase. It's been my go-to for managing user authentication, storing data, and even hosting the apps. With Flutter and Firebase, I've crafted apps that not only look great but also work smoothly and keep users engaged with real-time updates."},
        { imageURL: web, heading: 'Web Development', description: "I'm diving into web development, focusing on ReactJS. It's an exciting journey, learning how to build dynamic and interactive user interfaces for the web. As I explore ReactJS, I'm discovering its power in creating reusable components and managing state, making web development more efficient and enjoyable. I'm excited to apply my newfound skills to create engaging and responsive web applications that deliver a seamless user experience."},
        { imageURL: dsa, heading: 'Data Structures and Algorithms', description: "I'm diving into Data Structures and Algorithms (DSA) and occasionally tackling LeetCode problems. Though I'm still learning, each puzzle I solve feels like a small victory, helping me grasp new concepts and strategies. It's like unlocking secrets to problem-solving, and I'm excited to keep exploring and improving!"}
    ];
    
    return (
        <div className="skill">
            <h1>Skills</h1>
            <div className="skill-card-div">
            {skills.map((skill, index) => (
                <SkillCard
                    key={index}
                    imageURL={skill.imageURL}
                    heading={skill.heading}
                    description={skill.description}
                />
            ))}
            </div>
        </div>
    );
}

export default Skill;

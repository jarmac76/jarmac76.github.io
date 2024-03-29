import Skill from "../components/skill";
import html from "/assets/html5.png"
import js from "/assets/javascript.png"
import css from "/assets/css3.png"
import jquery from "/assets/jquery.png"
import react from "/assets/react.png"
import php from "/assets/php.png"
import python from "/assets/python.png"
import wp from "/assets/wordpress.png"
import jasmine from "/assets/jasmine.png"
import vs from "/assets/vscode-original.png"
import confluence from "/assets/confluence.png"
import bash from "/assets/bash.png"
import git from "/assets/git.png"

const Skills = () => {

    return(
        <>
            <div className="main-band">
                <div className="skill-band">
                    <a href="https://html.com/"><Skill imgSrc={html} imgAlt="Html logo" /></a>
                    <a href="https://www.javascript.com/"><Skill imgSrc={js} imgAlt="Javascript logo" /></a>
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html"><Skill imgSrc={css} imgAlt="CSS logo" /></a>
                    <a href="https://jquery.com/"><Skill imgSrc={jquery} imgAlt="jQuery logo" /></a>
                    <a href="https://react.dev/"><Skill imgSrc={react} imgAlt="React Logo" /></a>
                    <a href="https://www.php.net/"><Skill imgSrc={php} imgAlt="PHP logo" /></a>
                    <a href="https://www.python.org/"><Skill imgSrc={python} imgAlt='Python logo' /></a>
                    <a href="https://wordpress.com/"><Skill imgSrc={wp} imgAlt='Wordpress logo' /></a>
                    <a href="https://jasmine.github.io/"><Skill imgSrc={jasmine} imgAlt="Jasmine.js logo" /></a>
                    <a href="https://code.visualstudio.com/"><Skill imgSrc={vs} imgAlt="VS Code logo" /></a>
                    <a href="https://www.atlassian.com/software/confluence"><Skill imgSrc={confluence} imgAlt="Confluence logo" /></a>
                    <a href="https://www.gnu.org/software/bash/"><Skill imgSrc={bash} imgAlt="Bash logo" /></a>
                    <a href="https://git-scm.com/"><Skill imgSrc={git} imgAlt="Git Logo" /></a>
                </div>
                
            </div>
        </>

    )
}

export default Skills;
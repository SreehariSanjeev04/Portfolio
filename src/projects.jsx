import Card from "./home/card";

function Project() {
    const projects = [{
        title:'SneakerCenter', details:'A sleek and intuitive sneaker app developed with Flutter and powered by Firebase.SneakerHub brings together the best of technology and fashion. With its user-friendly interface and real-time updates,Experience the future of footwear shopping with SneakerHub.'
      },{
        title:'WallWonders',details: 'WallWonders is a wallpaper app created with Flutter and Firebase. It is designed to bring joy and inspiration to users by offering a diverse selection of beautiful wallpapers. With its easy-to-use interface, users can discover, save, and share their favorite wallpapers hassle-free.'
      }];
    return(
        <div className="project">
            <h1>Projects</h1>
            <div className="project-card">
            {projects.map((project) => <Card title={project.title} details={project.details} />)}
            </div>
        </div>
    )
}
export default Project;
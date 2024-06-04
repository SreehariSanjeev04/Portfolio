import EduCard from './educard';
import elite from '../assets/elite.jpg'
import sacred from '../assets/sacred.png'
import nit from '../assets/nit.jpg'
function Education(){
    const education = [
        {imageURL:elite,   title:'Elite English School', year:'2013-2022', description:'The Elite English School is a co-educational school in Dubai that offers education from Kindergarten to Grade 12. It was founded in 1992 and follows the Indian Central Board of Secondary Education (CBSE) curriculum.'},
        {imageURL:sacred, title:'Sacred Heart Senior Secondary School', year:'2022-2023', description: 'The Sacred Heart Senior Secondary School is a reputed institute located in Malappuram, Kerala. It follows the Indian Central Board of Secondary Education (CBSE) curriculum. '},
        {imageURL:nit, title:'NIT Calicut', year:'2023-Now', description:"National Institute of Technology Calicut (NITC), formerly known as Regional Engineering College Calicut (REC Calicut), is a premier institute of higher learning in India, established in 1960. It's recognized as an Institute of National Importance by the Government of India."}
    ];
    return(
        <div className="education">
                {education.map((edu,index) => <EduCard key={index} imageURL={edu.imageURL} title={edu.title} year={edu.year} description={edu.description} />)}
        </div>
    )
}
export default Education
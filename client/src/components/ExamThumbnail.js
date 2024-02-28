function Exam_IMG({img_link}) {
    const img_src = 'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/' + img_link;
    return (
        <div>
            <img className="exam-thumbnail" src={img_src} width="300px" height="300px" alt="" />
        </div>

    );
}

export default Exam_IMG;
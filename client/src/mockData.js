 
 const fakeData =  Array.from({ length: 10 }, (_, i) => ({
      Patient_ID: `PATIENT_${i + 1}`,
      Age: 20 + i + 1,
      Sex: (i + 1) % 2 === 0 ? "M" : "F",
      Zip: `1000${i + 1}`,
      Latest_BMI: 22.5 + i + 1,
      Latest_weight: 120 + (i + 1) * 5,
      Image: `patient_${i + 1}.png`,
      Exam_Id: `EXAM_${i + 1}`,
      ICU_Admit: (i + 1) % 2 === 0 ? "Yes" : "No",
      ICU_admits: (i + 1) % 3, // Cycles through 0, 1, 2
      Mortality: (i + 1) % 4 !== 0 ? "Alive" : "Deceased"
    }));
  export default fakeData 
  
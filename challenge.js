function gradingStudents(grades) {
    // Write your code here
   const re = grades.map((vale) => {
       if(vale < 38) { 
           return vale;
       }
       else if(vale % 5 < 3){
           return vale;
       }
       else{
           let d = 5 - (vale % 5);
           return vale + d;
       }
   });
   return re;
}

export interface Employee {
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    educationBlocks:{
        school:string,
        degree:string,
        fieldOfStudy:string,
        startDate:string,
        endDate:string
    }[],
experienceBlocks:{
    title:string,
    company:string,
    location:string,
    startDate:string,
    endDate:string,
    description:string

}[]
}

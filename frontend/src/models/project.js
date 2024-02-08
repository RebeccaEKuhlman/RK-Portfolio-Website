/**
 * Project object to store data for a project
 */
export class Project{
    constructor(name, imgSrc, date, description, miniDes){
        this.imgSrc = imgSrc;
        this.name = name;
        this.date = date;
        this.description = description;
        this.miniDes = miniDes;
    }
}
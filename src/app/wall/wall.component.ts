import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { Model } from './model';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit {

    title : { width : string; height : string; };
    unit : string = "meter";
    room : Room = new Room(1000, 500, 0, 0, 0, 0);
    model : Model = new Model();
    rows : number = 1;
    cols : number = 1;
    videoWidth : number;
    videoHeight : number;

    constructor() {
    }

    ngOnInit() {

        this.title = { width : 'Width(m)' , height : 'Height(m)'};
        this.model = { name : null, width : 100, height : 50 };

        this.cols = this.rows = 1;
        this.changeWall();
    }

    //단위 변경
    converseToFeet(_metersNum) : number {
        var feetNum = parseFloat((_metersNum * 3.28).toPrecision(2));
        return feetNum;
    }

    // 단위 변경
    converseToMeter(_feetNum) : number {
        var meterNum = parseFloat((_feetNum * 0.3048).toPrecision(2));
        return meterNum;
    }

    // 단위
    setUnit(_unit) {
        if (this.unit != _unit) {
            switch (_unit) {
                case 'meter' :
                    this.room.width = this.converseToMeter(this.room.width);
                    this.room.height = this.converseToMeter(this.room.height);
                    this.title.height = "Height(m)";
                    this.title.width = "Width(m)";
                    break;
                case 'feet' :
                    this.room.width = this.converseToFeet(this.room.width);
                    this.room.height = this.converseToFeet(this.room.height);
                    this.title.height = "Height(f)";
                    this.title.width = "Width(f)";
                    break;
                default :
                    break;
            }
            if (_unit) this.unit = _unit;
        }

    }

    changeWall() {

        this.videoWidth = this.cols * this.model.width;
        this.videoHeight = this.rows * this.model.height;

        this.room.left = this.room.right = (this.room.width - this.videoWidth) / 2;
        this.room.top = this.room.bottom = (this.room.height - this.videoHeight) / 2;
    }

    // 회전
    rotateVideo() {
        var width = this.model.width;
        var height = this.model.height;

        this.model.width = height;
        this.model.height = width;

        this.changeWall();
    }

    chageVideoCount(_cmd) {

        switch (_cmd) {
            case 'ru' :
                this.rows++;
                break;
            case 'rd' :
                if (this.rows > 1)
                    this.rows--;
                break;
            case 'cu' :
                this.cols++;
                break;
            case 'cd' :
            if (this.cols > 1)
                this.cols--;
                break;
            default :
                break;
        }

        this.changeWall();
    }
}

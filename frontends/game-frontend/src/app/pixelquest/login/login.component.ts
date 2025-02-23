import { Component } from '@angular/core';
import { ScreenSizeService } from '../../service/screen/screen-size.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../service/data/config/config.service';
import { AccountService } from '../../service/data/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  screenSize: { width: number, height: number } | null = null;
  private subscription!: Subscription;
  username: string = '';
  password: string = '';

  constructor(private screenSizeService: ScreenSizeService,private configService:ConfigService,private pixelQuestAccountService:AccountService) { }

  ngOnInit(): void {
    this.subscription = this.screenSizeService.screenSize$.subscribe(size => {
      this.screenSize = {
        width: (size.width * 0.3),
        height: (size.height * 0.5)
      };
    });
  }

  login(){
    this.pixelQuestAccountService.loadAccount(1);
    this.configService.emitView({isWorld:true,isLogin:false});
  }
}

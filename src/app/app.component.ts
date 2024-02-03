import { Component, Renderer2, AfterViewInit, HostListener, OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'Bhagswebsite';
  mobileScreen: boolean = false;
  activeTab = 'skills';
  activeScreenSize = 0;
  menuOpen = false;
  emailAddress = "Bhagsandhu2@gmail.com";
  emailSubject = "Contact from Bhagdeep's Website";
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit() {
    this.checkWindowSize();
    this.renderer.listen('window', 'resize', () => {
      this.checkWindowSize(); 
    });

    document.getElementById('menu-button')?.addEventListener('click', function() {
      let mobileMenu = document.getElementById('mobile-menu');
      if(mobileMenu === null) {
        return;
      }
      mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none'; 
    });
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  openEmailClient() {
    const mailtoLink = `mailto:${this.emailAddress}?subject=${(this.emailSubject)}`;
    window.location.href = mailtoLink;
  }

  checkWindowSize() {
    this.activeScreenSize = window.innerWidth;
    this.mobileScreen = this.activeScreenSize < 800;
  }

  checkMobileScreen(): boolean {
    if(this.activeScreenSize < 380) {
      return false;
    }
    else {
      return true;
    }
  }

  checkNavBar(){
    if(this.activeScreenSize < 540) {
      return true;
    }
    else {
      return false;
    }
  }

  setTab(tab: string): void {
    this.activeTab = tab;  
  }

  toLinkedInPage(){
    window.open("https://www.linkedin.com/in/bhagdeep/");
  }
  toGitHubPage(){
    window.open("https://github.com/Bsandhu97");
  }
  toSFSUPage(){
    window.open("https://www.sfsu.edu/");
  }
  toOSUPage(){
    window.open("https://oregonstate.edu/");
  }
  toSyzygy(){
    window.open("https://ca.ltddir.com/corporations?utm_source=syzygy-labs-research-inc");
  }
  toPencil(){
    window.open("https://www.pencilspaces.com/");
  }

  clearModal(): void {
    const contactMessage = document.getElementById('contactMessage') as HTMLInputElement;
    contactMessage.value = '';
    const contactEmail = document.getElementById('contactEmail') as HTMLInputElement;
    contactEmail.value = '';
  }
}

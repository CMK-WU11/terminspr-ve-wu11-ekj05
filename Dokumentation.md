# Dokumentation for Landrup dans

Emil jensen, WU11

Her er alle brugere fra api'et:  
| id | username | password | age | role |
| --- | --- | --- | --- | --- |
| 1 | instructor1 | 1234 | 24 | instructor |
| 2 | instructor2 | 1234 | 32 | instructor |
| 3 | instructor3 | 1234 | 27 | instructor |
| 4 | instructor4 | 1234 | 31 | instructor |
| 5 | user1 | 1234 | 14 | default |
| 6 | user2 | 1234 | 17 | default |
| 7 | user3 | 1234 | 21 | default |
| 8 | user4 | 1234 | 24 | default |
| 9 | user5 | 1234 | 52 | default |
| 10 | user6 | 1234 | 51 | default |

## Tech-stack
* [**NextJS**](https://nextjs.org)  
Jeg har valgt at bruge next.js som mit framework, fordi jeg kender det bedst og synes godt om server-side rendering som next tilbyder.
* [**React Icons**](https://react-icons.github.io)  
Jeg har brugt react-icons til mine ikoner, fordi det er let og hurtigt, og ikke  fylder meget visuelt i koden.
* [**Sass**](https://sass-lang.com/)  
Jeg har brugt sass til min styling, fordi jeg synes godt om den lette syntax, nesting, og kan let holde styr på hvilken styling er til hvad.
* [**Zod**](https://zod.dev/)  
Jeg har brugt zod til min form validering, fordi det er nemt og gør form valideringen let-læselig kodemæssigt.

## Tredjepartskode
Jeg har brugt kode fra mine andre projekter i min login action, og min login page:

* [**login action**](src/actions/login.js)  
Det meste af af koden i denne fil er fra en af min andre filer.
* [**login page**](src/app/login/page.jsx)  
I denne fil har jeg brugt linje 10, useEffect, og nogle værdier i input fælterne fra anden fil
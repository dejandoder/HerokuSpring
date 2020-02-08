var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/istorija/istorija.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/istorija/istorija.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div>\n                <p>Istorija pregleda </p>\n                <table class=\"table sortable-table\" matSort (matSortChange)=\"sortData($event)\">\n                    <thead>\n                        <tr>\n                            <th mat-sort-header=\"medium\">Datum i vrijeme pregleda</th>\n                            <th mat-sort-header=\"tip\">Tip</th>\n                            <th mat-sort-header=\"trajanje\">Trajanje</th>\n                            <th mat-sort-header=\"sala\">Sala</th>\n                            <th mat-sort-header=\"ljekar\">Ljekar</th>\n                            <th mat-sort-header=\"klinika\">Klinika</th>\n                            <th mat-sort-header=\"cijena\">Cijena</th>\n                            <th mat-sort-header=\"stanje\">Status</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let a of sortedData; let i = index\">\n                        <tr>\n\n                            <td style=\"text-align: left;\">{{a.medium}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.trajanje}} min</td>\n                            <td style=\"text-align: center;\">{{a.sala}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.klinika.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.cijena - a.popust}} €</td>\n                            <td style=\"text-align: center;\">{{a.stanje}}</td>\n                            <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                    (click)=\"ocijeniKliniku(ocjKlinika, a)\" *ngIf=\"a.stanje == 'ZAKAZAN'\">Ocijeni\n                                    kliniku</button></td>\n                            <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                    (click)=\"ocijeniLjekara(ocjLjekar, a)\" *ngIf=\"a.stanje == 'ZAKAZAN'\">Ocijeni\n                                    ljekara</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</body>\n\n<ng-template #ocjKlinika>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title naslov pull-left\">Ocijenjivanje klinike</h4>\n    </div>\n    <div class=\"modal-body d-flex \">\n        <div>\n            <div class=\"jumbotron2\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                                <label>Ime klinike</label>\n                                <input class=\"form-control\" [(ngModel)]=\"imeKlinike\"\n                                    [ngModelOptions]=\"{standalone:true}\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                                <label>Grad</label>\n                                <input class=\"form-control\" [(ngModel)]=\"gradKlinike\"\n                                    [ngModelOptions]=\"{standalone:true}\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                                <label>Trenutna ocjena</label>\n                                <input class=\"form-control\" [(ngModel)]=\"ocjenaKlinike\"\n                                    [ngModelOptions]=\"{standalone:true}\" disabled>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                        <div class=\"form-group\">                           \n                                <label>Moja ocjena</label>                           \n                                <select class=\"form-control\" [(ngModel)]=\"ocjenjenaKlinika\" id=\"ocjenjenaKlinika\" name=\"ocjenjenaKlinika\">\n                                    <option value=\"1\">1</option>\n                                    <option value=\"2\">2</option>\n                                    <option value=\"3\">3</option>\n                                    <option value=\"4\">4</option>\n                                    <option value=\"5\">5</option>\n                                </select>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <button type=\"submit\" (click)=\"ocijeniK()\" class=\"btn btn-primary \">Ocijeni</button>\n                                <button (click)=\"odustani()\" class=\"btn btn-secondary\">Odustani</button>\n                            </div>\n                        </div>\n                   \n                </div>\n\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #ocjLjekar>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title naslov pull-left\">Ocijenjivanje ljekara</h4>\n    </div>\n    <div class=\"modal-body d-flex \">\n        <div>\n            <div class=\"jumbotron2\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Ime </label>\n                            <input class=\"form-control\" [(ngModel)]=\"imeLjekara\" [ngModelOptions]=\"{standalone:true}\"\n                                disabled>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Prezime</label>\n                            <input class=\"form-control\" [(ngModel)]=\"prezimeLjekara\"\n                                [ngModelOptions]=\"{standalone:true}\" disabled>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Trenutna ocjena</label>\n                            <input class=\"form-control\" [(ngModel)]=\"ocjenaLjekara\" [ngModelOptions]=\"{standalone:true}\"\n                                disabled>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Moja ocjena</label>\n                            <select class=\"form-control\" [(ngModel)]=\"ocjenjenLjekar\" id=\"ocjenjenLjekar\" name=\"ocjenjenLjekar\">\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                            </select>\n                        </div>\n                    </div>\n                    <br>\n                    <br>\n                    <div class=\"form-group\">\n                    <div class=\"col-md-12\">\n                        \n                            <button type=\"submit\" (click)=\"ocijeniLj()\" class=\"btn btn-primary \">Ocijeni</button>\n                            <button (click)=\"odustani()\" class=\"btn btn-secondary\">Odustani</button>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/klinika/klinika.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/klinika/klinika.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <p>Lista klinika </p>\n        \n            <table class=\"table sortable-table\" matSort (matSortChange)=\"sortData($event)\">\n                <thead>\n                    <tr>\n                        <th mat-sort-header=\"ime\">Ime</th>\n                        <th mat-sort-header=\"adresa\">Adresa</th>\n                        <th mat-sort-header=\"opis\">Opis</th>\n                        <th mat-sort-header=\"grad\">Grad</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let klinike of sortedData\">\n                    <tr>\n                        <td style=\"text-align: left;\">{{klinike.ime}}</td>\n                        <td style=\"text-align: left;\">{{klinike.adresa}}</td>\n                        <td style=\"text-align: left;\">{{klinike.opis}}</td>\n                        <td style=\"text-align: left;\">{{klinike.grad}}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <!--  <div>\n                <h2>Lista dostupnih pregleda </h2>\n                <br>\n                <table class=\"table\"  sortable-table (sorted)=\"onSorted($event)\">\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Redni broj</th>\n                            <th sortable-column=\"ime\" style=\"text-align: center;\" >Ime</th>\n                            <th style=\"text-align: center;\">Adresa</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let a of klinike; let i = index\">\n                        <tr>\n                            <th style=\"text-align: center;\" scope=\"row\">{{i+1}}</th>\n                            <td style=\"text-align: center;\">{{a.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.adresa}}</td>\n\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>-->\n\n        </div>\n\n\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pacijent.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pacijent.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default  \">\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav nav-tabs nav-justified\" id=\"listanav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"klinikaClick()\"> Klinike</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"zakazivanjeClick()\">Zakazivanje pregleda</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"preglediClick()\">Dostupni pregledi</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"kartonClick()\">Zdravstveni karton</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"zakazaniPregledi()\">Zakazani pregledi</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"istorijaClick()\">Istorija pregleda</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"profilClick()\">Nalog</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"odjaviClick()\">Odjavi se</a>\n            </li>\n\n        </ul>\n    </div>\n\n</nav>\n\n<!--\n<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n\n            <h1>DOBRO DOSLI NA VAS PROFIL</h1>\n        </div>\n    </div>\n\n</body>\n-->\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.html": 
        /*!****************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.html ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    \n    <body class=\"inventory-body\">\n        <div class=\"container\">\n            <div class=\"jumbotron\">\n    \n                <h1>DOBRO DOSLI NA VAS PROFIL</h1>\n            </div>\n        </div>\n    \n    </body>\n    ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pregled/pregled.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pregled/pregled.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div >\n                <p>Lista dostupnih pregleda </p>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Redni broj</th>\n                            <th style=\"text-align: center;\">Datum i vrijeme pregleda</th>\n                            <th style=\"text-align: center;\">Tip</th>\n                            <th style=\"text-align: center;\">Trajanje</th>\n                            <th style=\"text-align: center;\">Sala</th>\n                            <th style=\"text-align: center;\">Ljekar</th>\n                            <th style=\"text-align: center;\">Klinika</th>\n                            <th style=\"text-align: center;\">Popust</th>\n                            <th style=\"text-align: center;\">Cijena</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let a of pregledi; let i = index\">\n                        <tr>\n                            <th style=\"text-align: center;\" scope=\"row\">{{i+1}}</th>\n                            <td style=\"text-align: center;\">{{a.medium}} {{a.vrijeme}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.trajanje}} min</td>\n                            <td style=\"text-align: center;\">{{a.sala}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.klinika.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.popust}} €</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.cijena}} €</td>\n                            <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                    (click)=\"zakaziDostupniPregled(a)\">Zakaži pregled</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/profil/profil.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/profil/profil.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div id=\"divLogin\">\n                <p>Podaci o korisniku</p>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label>Ime:</label>\n                            <input class=\"form-control\" placeholder=\"Unesite ime\" name=\"username\"\n                                [(ngModel)]=\"trenutniKorisnik.ime\" [ngModelOptions]=\"{standalone:true}\">\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label>Prezime:</label>\n\n                            <input class=\"form-control\" placeholder=\"Unesite prezime\"\n                                [(ngModel)]=\"trenutniKorisnik.prezime\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label>E-mail:</label>\n\n                            <input class=\"form-control\" disabled [(ngModel)]=\"trenutniKorisnik.email\"\n                                [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label>Adresa: </label>\n                            <input class=\"form-control\" placeholder=\"Unesite adresu\"\n                                [(ngModel)]=\"trenutniKorisnik.adresa\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Grad: </label>\n                            <input class=\"form-control\" placeholder=\"Unesite grad\" [(ngModel)]=\"trenutniKorisnik.grad\"\n                                [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Država:</label>\n                            <input class=\"form-control\" placeholder=\"Unesite državu\"\n                                [(ngModel)]=\"trenutniKorisnik.drzava\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Broj telefona:</label>\n                            <input class=\"form-control\" id=\"mail\" placeholder=\"Unesite broj telefona\"\n                                [(ngModel)]=\"trenutniKorisnik.brojTelefona\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Jedinstveni broj:</label>\n                            <input class=\"form-control\" id=\"mail\" placeholder=\"Unesite broj\" disabled\n                                [(ngModel)]=\"trenutniKorisnik.jedinstveniBroj\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n\n                    <br>\n                    <div class=\"form-group row\">\n                        <div class=\"col-6\">\n                            <button type=\"submit\" (click)=\"izmijeniPodatke()\" class=\"btn btn-primary \">Izmijeni\n                                podatke</button>\n                            <button type=\"submit\" (click)=\"izmijeniLozinku(lozinkaModal)\"\n                                class=\"btn btn-primary \">Izmijeni\n                                lozinku</button>\n                            <button (click)=\"odustani()\" class=\"btn btn-secondary\">Odustani</button>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</body>\n\n<ng-template #lozinkaModal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title naslov pull-left\">Izmjena lozinke</h4>\n    </div>\n    <div class=\"modal-body d-flex \">\n        <div>\n            <div class=\"jumbotron2\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Nova lozinka: </label>\n                            <input class=\"form-control\" [(ngModel)]=\"novaLozinka\" [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Ponovi novu lozinku: </label>\n                            <input class=\"form-control\" [(ngModel)]=\"prezimeLjekara\"\n                                [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12\">\n\n                            <button type=\"submit\" (click)=\"izmijeniLozinku2()\" class=\"btn btn-primary \">Izmijeni</button>\n                            <button (click)=\"odustaniOdIzmjene()\" class=\"btn btn-secondary\">Odustani</button>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div>\n                <p>Lista zakazanih pregleda</p>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Redni broj</th>\n                            <th style=\"text-align: center;\">Datum i vrijeme pregleda</th>\n                            <th style=\"text-align: center;\">Tip</th>\n                            <th style=\"text-align: center;\">Trajanje</th>\n                            <th style=\"text-align: center;\">Sala</th>\n                            <th style=\"text-align: center;\">Ljekar</th>\n                            <th style=\"text-align: center;\">Klinika</th>\n                            <th style=\"text-align: center;\">Cijena</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let a of pregledi; let i = index\">\n                        <tr>\n                            <th style=\"text-align: center;\" scope=\"row\">{{i+1}}</th>\n                            <td style=\"text-align: center;\">{{a.medium}} {{a.vrijeme}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.trajanje}} min</td>\n                            <td style=\"text-align: center;\">{{a.sala}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.klinika.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.cijena - a.popust}} €</td>\n                            <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                    (click)=\"otkaziPregled(a)\">Otkaži pregled</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div class=\"row\" style=\"max-width: 90%; margin: 0 auto; \">\n                <p text-align=\"center\">Zakazivanje pregleda</p>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Datum pregleda:</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-calendar\"></i></span>\n                                <input class=\"form-control\" type=\"date\" required=\"required\" [(ngModel)]=\"datumPregleda\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Tip pregleda:</label>\n                            <select class=\"form-control\" [(ngModel)]=\"pregled\">\n                                <option *ngFor=\"let pregled of sviTipoviPregleda\" [ngValue]=\"pregled\">\n                                    {{pregled.ime}}\n                                </option>\n                            </select>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label>Ocjena klinike:</label>\n                            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"ocjenaKlinike\"\n                                [ngModelOptions]=\"{standalone:true}\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"endDestination\">Lokacija klinike: </label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-map-marker\"></i></span>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"lokacijaKlinike\"\n                                    [ngModelOptions]=\"{standalone:true}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-11\">\n                        <button type=\"button \" (click)=\"pretraziKlinike()\" style=\"margin-left:40%;margin-right:30%;\"\n                            class=\"btn btn-primary\">Pretraži\n                            klinike</button>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <br>\n            <table class=\"table sortable-table\" *ngIf=\"prikazTabeleKlinike == true\">\n                <thead>\n                    <tr>\n                        <th style=\"text-align: center;\">Ime</th>\n                        <th style=\"text-align: center;\">Opis</th>\n                        <th style=\"text-align: center;\">Lokacija</th>\n                        <th style=\"text-align: center;\">Ocjena</th>\n                        <th style=\"text-align: center;\">Cijena</th>\n                    </tr>\n                </thead>\n                <tbody *ngFor=\"let klinika of klinike\">\n                    <tr>\n                        <td style=\"text-align: center;\">{{klinika.ime}}</td>\n                        <td style=\"text-align: center;\">{{klinika.opis}}</td>\n                        <td style=\"text-align: center;\">{{klinika.grad}}</td>\n                        <td style=\"text-align: center;\">{{klinika.ocjena}}</td>\n                        <td style=\"text-align: center;\">{{cijena}}</td>\n                        <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                (click)=\"prikaziLjekare(klinika)\">Prikaži ljekare</button></td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"row\" *ngIf=\"prikazTabeleLjekara == true\">\n                <h3>Spisak ljekara</h3>\n                <br>\n                <table class=\"table sortable-table\">\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Ime </th>\n                            <th style=\"text-align: center;\">Prezime</th>\n                            <th style=\"text-align: center;\">Ocjena</th>\n                            <th style=\"text-align: center;\">Radno vrijeme</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let ljekar of ljekari\">\n                        <tr>\n                            <td style=\"text-align: center;\">{{ljekar.ime}}</td>\n                            <td style=\"text-align: center;\">{{ljekar.prezime}}</td>\n                            <td style=\"text-align: center;\">{{ljekar.ocjena}}</td>\n                            <td style=\"text-align: center;\">{{ljekar.radno_vrijeme_od}} - {{ljekar.radno_vrijeme_do}}\n                            </td>\n                            <td style=\"text-align: center;\"><button class=\"btn btn-link\"\n                                (click)=\"prikaziTermine(modal, ljekar)\">Prikaži termine</button></td>\n            \n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"row\" style=\"max-width: 90%; margin: 0 auto;\" *ngIf=\"prikazTabeleLjekara == true\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label>Ime </label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-text-size\"></i></span>\n                                <input class=\"form-control\" type=\"text\" id=\"imeLjekara\"\n                                    [(ngModel)]=\" imeLjekaraPretraga\" [ngModelOptions]=\"{standalone:true}\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label>Prezime</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-text-size\"></i></span>\n                                <input class=\"form-control\" type=\"text\" id=\"prezimeLjekara\"\n                                    [(ngModel)]=\"prezimeLjekaraPretraga\" [ngModelOptions]=\"{standalone:true}\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label>Ocjena</label>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"> <i class=\"glyphicon glyphicon-heart\"></i></span>\n                                <input class=\"form-control\" type=\"number\" id=\"ocjenaLjekara\" [(ngModel)]=\"ocjenaLjekara\"\n                                    [ngModelOptions]=\"{standalone:true}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-11\">\n                        <button type=\"button \" (click)=\"pretraziLjekare()\" style=\"margin-left:40%;margin-right:30%;\"\n                            class=\"btn btn-primary\">Pretraži\n                            Ljekare</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n\n<ng-template #modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title naslov pull-left\">Slobodni termini </h4>\n    </div>\n    <div class=\"modal-body d-flex \">\n        <div>\n            <div class=\"jumbotron2\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <label>Termini</label>\n                            <select class=\"form-control\" [(ngModel)]=\"terminLj\" >\n                                <option *ngFor=\"let termin of sviTermini\" [hidden]=\"termin.zauzet == true\" [ngValue]=\"termin\">\n                                    {{termin.termin}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"form-group\">\n                    <div class=\"col-md-12\">\n                            <button style=\"margin: 5px\" type=\"submit\" (click)=\"zakaziPregled()\" class=\"btn btn-primary \">Zakazi pregled</button>          \n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.html": 
        /*!********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.html ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div>\n                <p>Zdravstveni karton</p>\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th style=\"text-align: center;\">Redni broj</th>\n                            <th style=\"text-align: center;\">Datum</th>\n                            <th style=\"text-align: center;\">Bolest</th>\n                            <th style=\"text-align: center;\">Ljekar koji je izvrsio pregled</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let a of pregledi; let i = index\">\n                        <tr>\n                            <th style=\"text-align: center;\" scope=\"row\">{{i+1}}</th>\n                            <td style=\"text-align: center;\">{{a.medium}}</td>\n                            <td style=\"text-align: center;\">{{a.tipPregleda.ime}}</td>\n                            <td style=\"text-align: center;\">{{a.ljekar.ime}} {{a.ljekar.prezime}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pocetna-stranica/pocetna-stranica.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pocetna-stranica/pocetna-stranica.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default navbar-light \">\n\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav nav-tabs nav-justified\" id=\"listanav\">\n\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"registracijaClick()\">Registracija</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"prijavaClick()\">Prijava</a>\n            </li>\n\n        </ul>\n    </div>\n\n</nav>\n\n\n<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n\n            <h1>KLINIČKI CENTAR</h1>\n        </div>\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prijava/prijava.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prijava/prijava.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\n    integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\"\n    integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\"\n    crossorigin=\"anonymous\"></script>\n\n<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div id=\"divLogin\">\n                <p>Prijava na sistem</p>\n                <br>\n                <div>\n                    <form method=\"post\">\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-4\">\n                                <label>Korisnicko ime:</label>\n                            </div>\n                            <div class=\"col-6\">\n                                <input class=\"form-control\" id=\"mail\" placeholder=\"Unesite korisnicko ime\"\n                                    name=\"username\" [(ngModel)]=\"user.username\" [ngModelOptions]=\"{standalone: true}\"\n                                    [ngClass]=\"{\n                                        'is-invalid': validacijaKorisnickoIme \n                                    }\" (focus)=\"validacijaKorisnickoIme=false\">\n                                <div class=\"invalid-feedback\" *ngIf=\"validacijaKorisnickoIme==true\">\n                                    Neispravno korisnicko ime.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-4\">\n                                <label for=\"pwd\">Lozinka:</label>\n                            </div>\n                            <div class=\"col-6\">\n                                <input type=\"password\" class=\"form-control provjeraPrazno\" id=\"lozinka\"\n                                    placeholder=\"Unesite lozinku\" [(ngModel)]=\"user.password\"\n                                    [ngModelOptions]=\"{standalone: true}\" [ngClass]=\"{\n                                        'is-invalid': validacijaLozinka \n                                    }\" (focus)=\"validacijaLozinka=false\">\n                                <div class=\"invalid-feedback\" *ngIf=\"validacijaLozinka==true\">\n                                    Neispravna lozinka.\n                                </div>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"form-group row\">\n\n                            <div class=\"col-12\">\n                                <button type=\"submit\" (click)=\"clickLogIn()\" class=\"btn btn-primary \">Uloguj se</button>\n                                <button (click)=\"odustani()\" class=\"btn btn-secondary\">Odustani</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registracija/registracija.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registracija/registracija.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"\n    integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\"\n    integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\"\n    crossorigin=\"anonymous\"></script>\n\n<body class=\"inventory-body\">\n    <div class=\"container\">\n        <div class=\"jumbotron anyClass\">\n            <div id=\"divLogin\">\n                <p>Registracija novog pacijenta</p>\n                <br>\n                <br>\n                <form method=\"POST\">\n                    <div class=\"form-group row \">\n                        <div class=\"col-4\">\n                            <label for=\"ime\">Ime:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" [ngClass]=\"{\n                                    'is-invalid': validacijaIme \n                                }\" (focus)=\"validacijaIme =false\" placeholder=\"Unesite ime\" [(ngModel)]=\"korisnik.ime\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaIme ==true\">\n                                Ime mora biti navedeno.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Prezime:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Unesite prezime\"\n                                [(ngModel)]=\"korisnik.prezime\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                        'is-invalid': validacijaPrezime \n                                    }\" (focus)=\"validacijaPrezime=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaPrezime==true\">\n                                Prezime mora biti navedeno.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>E-mail:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Unesite e-mail\"\n                                [(ngModel)]=\"korisnik.email\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                        'is-invalid': validacijaMail \n                                    }\" (focus)=\"validacijaMail=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaMail==true\">\n                                E-mail mora biti naveden.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Adresa:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Unesite adresu\"\n                                [(ngModel)]=\"korisnik.adresa\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                        'is-invalid': validacijaAdresa \n                                    }\" (focus)=\"validacijaAdresa=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaAdresa==true\">\n                                Adresa mora biti navedena.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Grad: </label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Unesite grad\"\n                                [(ngModel)]=\"korisnik.grad\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                        'is-invalid': validacijaGrad \n                                    }\" (focus)=\"validacijaGrad=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaGrad==true\">\n                                Grad mora biti naveden.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Država:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Unesite državu\"\n                                [(ngModel)]=\"korisnik.drzava\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                    'is-invalid': validacijaDrzava \n                                }\" (focus)=\"validacijaDrzava=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaDrzava==true\">\n                                Drzava mora biti navedena.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Broj telefona:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Unesite broj telefona\"\n                                [(ngModel)]=\"korisnik.brojTelefona\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                    'is-invalid': validacijaBroj\n                                }\" (focus)=\"validacijaBroj=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaBroj==true\">\n                                Broj telefona mora biti naveden.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label>Jedinstveni broj:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input type=\"number\" class=\"form-control\" placeholder=\"Unesite broj\"\n                                [(ngModel)]=\"korisnik.jedinstveniBroj\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                    'is-invalid': validacijaJedinstveni\n                                }\" (focus)=\"validacijaJedinstveni=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaJedinstveni==true\">\n                                Jedinstveni broj mora biti naveden.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label for=\"pwd\">Lozinka:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input type=\"password\" class=\"form-control provjeraPrazno\" placeholder=\"Unesite lozinku\"\n                                [(ngModel)]=\"korisnik.password\" [ngModelOptions]=\"{standalone:true}\" [ngClass]=\"{\n                                    'is-invalid': validacijaLozinka\n                                }\" (focus)=\"validacijaLozinka=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaLozinka==true\">\n                                Nije navedena lozinka\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-4\">\n                            <label for=\"pwd\">Ponovite lozinku:</label>\n                        </div>\n                        <div class=\"col-6\">\n                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"ponovljenaLozinka\"\n                                [ngModelOptions]=\"{standalone:true}\" placeholder=\"Ponovo unesite lozinku\" [ngClass]=\"{\n                                        'is-invalid': validacijaLozinkaPonovljena\n                                    }\" (focus)=\"validacijaLozinkaPonovljena=false\">\n                            <div class=\"invalid-feedback\" *ngIf=\"validacijaLozinkaPonovljena==true\">\n                                Lozinke se ne poklapaju\n                            </div>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"form-group row\">\n                        <div class=\"col-12\">\n                            <button class=\"btn btn-primary \" (click)=\"registujSe()\">Registruj\n                                se</button>\n                            <button (click)=\"odustani()\" class=\"btn btn-secondary\">Odustani</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_pocetna_stranica_pocetna_stranica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pocetna-stranica/pocetna-stranica.component */ "./src/app/components/pocetna-stranica/pocetna-stranica.component.ts");
            /* harmony import */ var _components_prijava_prijava_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/prijava/prijava.component */ "./src/app/components/prijava/prijava.component.ts");
            /* harmony import */ var _components_registracija_registracija_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registracija/registracija.component */ "./src/app/components/registracija/registracija.component.ts");
            /* harmony import */ var _components_pacijent_pacijent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pacijent/pacijent.component */ "./src/app/components/pacijent/pacijent.component.ts");
            /* harmony import */ var _components_pacijent_profil_profil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pacijent/profil/profil.component */ "./src/app/components/pacijent/profil/profil.component.ts");
            /* harmony import */ var _components_pacijent_istorija_istorija_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pacijent/istorija/istorija.component */ "./src/app/components/pacijent/istorija/istorija.component.ts");
            /* harmony import */ var _components_pacijent_klinika_klinika_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pacijent/klinika/klinika.component */ "./src/app/components/pacijent/klinika/klinika.component.ts");
            /* harmony import */ var _components_pacijent_zdravstveni_karton_zdravstveni_karton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pacijent/zdravstveni-karton/zdravstveni-karton.component */ "./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.ts");
            /* harmony import */ var _components_pacijent_pocetna_pacijent_pocetna_pacijent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pacijent/pocetna-pacijent/pocetna-pacijent.component */ "./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.ts");
            /* harmony import */ var _components_pacijent_pregled_pregled_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pacijent/pregled/pregled.component */ "./src/app/components/pacijent/pregled/pregled.component.ts");
            /* harmony import */ var _components_pacijent_zakazani_pregledi_zakazani_pregledi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pacijent/zakazani-pregledi/zakazani-pregledi.component */ "./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.ts");
            /* harmony import */ var _components_pacijent_zakazivanje_pregleda_zakazivanje_pregleda_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component */ "./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.ts");
            /* harmony import */ var _guards_AuthGuard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/AuthGuard */ "./src/app/guards/AuthGuard.ts");
            /* harmony import */ var _guards_PacijentGuard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/PacijentGuard */ "./src/app/guards/PacijentGuard.ts");
            var routes = [
                { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
                { path: 'pocetna', component: _components_pocetna_stranica_pocetna_stranica_component__WEBPACK_IMPORTED_MODULE_3__["PocetnaStranicaComponent"] },
                { path: 'login', component: _components_prijava_prijava_component__WEBPACK_IMPORTED_MODULE_4__["PrijavaComponent"], canActivate: [_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
                { path: 'registracija', component: _components_registracija_registracija_component__WEBPACK_IMPORTED_MODULE_5__["RegistracijaComponent"] },
                {
                    path: 'registrovan', component: _components_pacijent_pacijent_component__WEBPACK_IMPORTED_MODULE_6__["PacijentComponent"], canActivate: [_guards_PacijentGuard__WEBPACK_IMPORTED_MODULE_16__["PacijentGuard"]],
                    children: [
                        { path: '', redirectTo: 'pocetnaPacijent', pathMatch: 'full' },
                        { path: 'pocetnaPacijent', component: _components_pacijent_pocetna_pacijent_pocetna_pacijent_component__WEBPACK_IMPORTED_MODULE_11__["PocetnaPacijentComponent"] },
                        { path: 'pregledi', component: _components_pacijent_pregled_pregled_component__WEBPACK_IMPORTED_MODULE_12__["PregledComponent"] },
                        { path: 'profil', component: _components_pacijent_profil_profil_component__WEBPACK_IMPORTED_MODULE_7__["ProfilComponent"] },
                        { path: 'istorija', component: _components_pacijent_istorija_istorija_component__WEBPACK_IMPORTED_MODULE_8__["IstorijaComponent"] },
                        { path: 'klinika', component: _components_pacijent_klinika_klinika_component__WEBPACK_IMPORTED_MODULE_9__["KlinikaComponent"] },
                        { path: 'karton', component: _components_pacijent_zdravstveni_karton_zdravstveni_karton_component__WEBPACK_IMPORTED_MODULE_10__["ZdravstveniKartonComponent"] },
                        { path: 'zakazaniPregledi', component: _components_pacijent_zakazani_pregledi_zakazani_pregledi_component__WEBPACK_IMPORTED_MODULE_13__["ZakazaniPreglediComponent"] },
                        { path: 'zakazivanje', component: _components_pacijent_zakazivanje_pregleda_zakazivanje_pregleda_component__WEBPACK_IMPORTED_MODULE_14__["ZakazivanjePregledaComponent"] },
                        { path: '**', redirectTo: 'pocetnaPacijent' }
                    ]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'IsaFrontEnd';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ag-grid-community/angular */ "./node_modules/@ag-grid-community/angular/main.js");
            /* harmony import */ var _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_pacijent_pacijent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pacijent/pacijent.component */ "./src/app/components/pacijent/pacijent.component.ts");
            /* harmony import */ var _components_registracija_registracija_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/registracija/registracija.component */ "./src/app/components/registracija/registracija.component.ts");
            /* harmony import */ var _components_prijava_prijava_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/prijava/prijava.component */ "./src/app/components/prijava/prijava.component.ts");
            /* harmony import */ var _components_pocetna_stranica_pocetna_stranica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pocetna-stranica/pocetna-stranica.component */ "./src/app/components/pocetna-stranica/pocetna-stranica.component.ts");
            /* harmony import */ var _components_pacijent_profil_profil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pacijent/profil/profil.component */ "./src/app/components/pacijent/profil/profil.component.ts");
            /* harmony import */ var _components_pacijent_klinika_klinika_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pacijent/klinika/klinika.component */ "./src/app/components/pacijent/klinika/klinika.component.ts");
            /* harmony import */ var _components_pacijent_zdravstveni_karton_zdravstveni_karton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pacijent/zdravstveni-karton/zdravstveni-karton.component */ "./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.ts");
            /* harmony import */ var _components_pacijent_istorija_istorija_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pacijent/istorija/istorija.component */ "./src/app/components/pacijent/istorija/istorija.component.ts");
            /* harmony import */ var _components_pacijent_pocetna_pacijent_pocetna_pacijent_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pacijent/pocetna-pacijent/pocetna-pacijent.component */ "./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.ts");
            /* harmony import */ var _components_pacijent_pregled_pregled_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pacijent/pregled/pregled.component */ "./src/app/components/pacijent/pregled/pregled.component.ts");
            /* harmony import */ var _http_interceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./http-interceptor/AuthInterceptor */ "./src/app/http-interceptor/AuthInterceptor.ts");
            /* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/AuthService */ "./src/app/service/AuthService.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_pacijent_zakazani_pregledi_zakazani_pregledi_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pacijent/zakazani-pregledi/zakazani-pregledi.component */ "./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_pacijent_zakazivanje_pregleda_zakazivanje_pregleda_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component */ "./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                        _components_pacijent_pacijent_component__WEBPACK_IMPORTED_MODULE_11__["PacijentComponent"],
                        _components_registracija_registracija_component__WEBPACK_IMPORTED_MODULE_12__["RegistracijaComponent"],
                        _components_prijava_prijava_component__WEBPACK_IMPORTED_MODULE_13__["PrijavaComponent"],
                        _components_pocetna_stranica_pocetna_stranica_component__WEBPACK_IMPORTED_MODULE_14__["PocetnaStranicaComponent"],
                        _components_pacijent_profil_profil_component__WEBPACK_IMPORTED_MODULE_15__["ProfilComponent"],
                        _components_pacijent_klinika_klinika_component__WEBPACK_IMPORTED_MODULE_16__["KlinikaComponent"],
                        _components_pacijent_zdravstveni_karton_zdravstveni_karton_component__WEBPACK_IMPORTED_MODULE_17__["ZdravstveniKartonComponent"],
                        _components_pacijent_istorija_istorija_component__WEBPACK_IMPORTED_MODULE_18__["IstorijaComponent"],
                        _components_pacijent_pocetna_pacijent_pocetna_pacijent_component__WEBPACK_IMPORTED_MODULE_19__["PocetnaPacijentComponent"],
                        _components_pacijent_pregled_pregled_component__WEBPACK_IMPORTED_MODULE_20__["PregledComponent"],
                        _components_pacijent_zakazani_pregledi_zakazani_pregledi_component__WEBPACK_IMPORTED_MODULE_24__["ZakazaniPreglediComponent"],
                        _components_pacijent_zakazivanje_pregleda_zakazivanje_pregleda_component__WEBPACK_IMPORTED_MODULE_27__["ZakazivanjePregledaComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                        _ag_grid_community_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([])
                    ],
                    providers: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_23__["DatePipe"],
                        _service_AuthService__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _http_interceptor_AuthInterceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"], multi: true }
                    ],
                    exports: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/istorija/istorija.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/pacijent/istorija/istorija.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.naslov{\r\n    color: rgb(0, 47, 255);\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.jumbotron2{\r\n    margin: 1cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\nbutton{\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9pc3RvcmlqYS9pc3RvcmlqYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0NBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQ0FBcUMsQ0FBQztBQUMxQztJQUNJLHNIQUFzSDs7QUFFMUg7QUFDQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCOztFQUVwQjtBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWplbnQvaXN0b3JpamEvaXN0b3JpamEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuN2NtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vcG9jZXRuYS1wYWNpamVudC9rbGluaWthLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDJjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm5hc2xvdntcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uanVtYm90cm9uMntcclxuICAgIG1hcmdpbjogMWNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigwLCA0NywgMjU1KTtcclxuICAgIGZvbnQ6IG91dGxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO31cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmFueUNsYXNzIHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgXHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/istorija/istorija.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/components/pacijent/istorija/istorija.component.ts ***!
          \********************************************************************/
        /*! exports provided: IstorijaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IstorijaComponent", function () { return IstorijaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pregled.service */ "./src/app/service/pregled.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var src_app_model_Klinika__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Klinika */ "./src/app/model/Klinika.ts");
            /* harmony import */ var src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/klinika.service */ "./src/app/service/klinika.service.ts");
            /* harmony import */ var src_app_model_Ljekar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/Ljekar */ "./src/app/model/Ljekar.ts");
            /* harmony import */ var src_app_service_ljekar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ljekar.service */ "./src/app/service/ljekar.service.ts");
            var IstorijaComponent = /** @class */ (function () {
                function IstorijaComponent(service, datePipe, modalService, klinikaService, ljekarService) {
                    this.service = service;
                    this.datePipe = datePipe;
                    this.modalService = modalService;
                    this.klinikaService = klinikaService;
                    this.ljekarService = ljekarService;
                    this.pregledi = [];
                    this.imeKlinike = "";
                    this.adresaKlinike = "";
                    this.gradKlinike = "";
                    this.imeLjekara = "";
                    this.prezimeLjekara = "";
                    this.klinikaZaOcjenu = new src_app_model_Klinika__WEBPACK_IMPORTED_MODULE_5__["Klinika"];
                    this.ljekarZaOcjenu = new src_app_model_Ljekar__WEBPACK_IMPORTED_MODULE_7__["Ljekar"];
                    this.sortedData = this.pregledi.slice();
                }
                IstorijaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.preuzmiIstoriju().subscribe(function (data) {
                        var e_1, _a;
                        _this.pregledi = data;
                        try {
                            for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var date = _c.value;
                                date.medium = _this.datePipe.transform(date.termin, "d MMM y, h:mm a");
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _this.sortedData = _this.pregledi;
                    }, function (error) {
                        console.log(error);
                    });
                };
                IstorijaComponent.prototype.transformDate = function (date) {
                    this.datePipe.transform(date, 'yyyy-MM-dd'); //whatever format you need. 
                };
                IstorijaComponent.prototype.sortData = function (sort) {
                    var data = this.pregledi.slice();
                    if (!sort.active || sort.direction == '') {
                        this.sortedData = data;
                        return;
                    }
                    this.sortedData = data.sort(function (a, b) {
                        var isAsc = sort.direction == 'asc';
                        switch (sort.active) {
                            case 'id': return compare(a.id, b.id, isAsc);
                            case 'cijena': return compare(a.cijena, b.cijena, isAsc);
                            case 'popust': return compare(+a.popust, +b.popust, isAsc);
                            case 'tip': return compareString(a.tipPregleda.ime, b.tipPregleda.ime, isAsc);
                            case 'sala': return compare(+a.sala, +b.sala, isAsc);
                            case 'trajanje': return compare(+a.trajanje, +b.trajanje, isAsc);
                            case 'stanje': return compareString(a.stanje, b.stanje, isAsc);
                            case 'ljekar': return compareString(a.ljekar.ime, b.ljekar.ime, isAsc);
                            case 'klinika': return compareString(a.klinika.ime, b.klinika.ime, isAsc);
                            case 'medium': return compareDate(a.termin, b.termin, isAsc);
                            default: return 0;
                        }
                    });
                };
                IstorijaComponent.prototype.ocijeniKliniku = function (template, pregled) {
                    this.klinikaZaOcjenu = pregled.klinika;
                    this.modalRef = this.modalService.show(template);
                    this.imeKlinike = pregled.klinika.ime;
                    this.adresaKlinike = pregled.klinika.adresa;
                    this.gradKlinike = pregled.klinika.grad;
                    this.ocjenaKlinike = pregled.klinika.ocjena;
                };
                IstorijaComponent.prototype.ocijeniLjekara = function (template, pregled) {
                    this.ljekarZaOcjenu = pregled.ljekar;
                    this.modalRef = this.modalService.show(template);
                    this.imeLjekara = pregled.ljekar.ime;
                    this.prezimeLjekara = pregled.ljekar.prezime;
                    this.ocjenaLjekara = pregled.ljekar.ocjena;
                };
                IstorijaComponent.prototype.ocijeniK = function () {
                    var _this = this;
                    this.modalRef.hide();
                    this.klinikaService.ocijeniKliniku(this.ocjenjenaKlinika, this.klinikaZaOcjenu).subscribe(function (data) {
                        _this.service.preuzmiIstoriju().subscribe(function (data) {
                            var e_2, _a;
                            _this.pregledi = data;
                            try {
                                for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var date = _c.value;
                                    date.medium = _this.datePipe.transform(date.termin, "d MMM y, h:mm a");
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            _this.sortedData = _this.pregledi;
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                };
                IstorijaComponent.prototype.ocijeniLj = function () {
                    var _this = this;
                    this.modalRef.hide();
                    this.ljekarService.ocijeniLjekara(this.ocjenjenLjekar, this.ljekarZaOcjenu).subscribe(function (data) {
                        _this.service.preuzmiIstoriju().subscribe(function (data) {
                            var e_3, _a;
                            _this.pregledi = data;
                            try {
                                for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var date = _c.value;
                                    date.medium = _this.datePipe.transform(date.termin, "d MMM y, h:mm a");
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            _this.sortedData = _this.pregledi;
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                };
                return IstorijaComponent;
            }());
            IstorijaComponent.ctorParameters = function () { return [
                { type: src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__["PregledService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
                { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
                { type: src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_6__["KlinikaService"] },
                { type: src_app_service_ljekar_service__WEBPACK_IMPORTED_MODULE_8__["LjekarService"] }
            ]; };
            IstorijaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-istorija',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./istorija.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/istorija/istorija.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./istorija.component.css */ "./src/app/components/pacijent/istorija/istorija.component.css")).default]
                })
            ], IstorijaComponent);
            function compare(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            function compareString(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            function compareDate(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/klinika/klinika.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/pacijent/klinika/klinika.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    align-items: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\n.thead, .tbody{\r\n      margin-left: 5cm;\r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9rbGluaWthL2tsaW5pa2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0FBQ0o7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjs7RUFFcEI7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjtBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhY2lqZW50L2tsaW5pa2Eva2xpbmlrYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgYXBwLXJvb3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwbW07XHJcbiAgICB9XHJcbi5pbnZlbnRvcnktYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC43Y207XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9wb2NldG5hLXBhY2lqZW50L2tsaW5pa2EuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbjogMmNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hbnlDbGFzcyB7XHJcbiAgICBcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnRoZWFkLCAudGJvZHl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1Y207XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/klinika/klinika.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/components/pacijent/klinika/klinika.component.ts ***!
          \******************************************************************/
        /*! exports provided: KlinikaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlinikaComponent", function () { return KlinikaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Korisnik */ "./src/app/model/Korisnik.ts");
            /* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/student.service */ "./src/app/service/student.service.ts");
            /* harmony import */ var src_app_model_Student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Student */ "./src/app/model/Student.ts");
            /* harmony import */ var src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/klinika.service */ "./src/app/service/klinika.service.ts");
            /* harmony import */ var src_app_service_sort_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/sort.service */ "./src/app/service/sort.service.ts");
            var KlinikaComponent = /** @class */ (function () {
                function KlinikaComponent(service, serviceKlinika, sortService) {
                    this.service = service;
                    this.serviceKlinika = serviceKlinika;
                    this.sortService = sortService;
                    this.korisnik = new src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_2__["Korisnik"]();
                    this.studenti = [];
                    this.student = new src_app_model_Student__WEBPACK_IMPORTED_MODULE_4__["Student"]();
                    this.klinike = [];
                    this.sortedData = this.klinike.slice();
                }
                //displayedColumns: string[] = ['ime'];
                //dataSource = new MatTableDataSource(this.klinike);
                KlinikaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.serviceKlinika.preuzmiSveKlinike().subscribe(function (data) {
                        _this.klinike = data;
                        _this.sortedData = _this.klinike;
                    }, function (error) {
                        console.log(error);
                    });
                };
                KlinikaComponent.prototype.sortData = function (sort) {
                    var data = this.klinike.slice();
                    if (!sort.active || sort.direction == '') {
                        this.sortedData = data;
                        return;
                    }
                    this.sortedData = data.sort(function (a, b) {
                        var isAsc = sort.direction == 'asc';
                        switch (sort.active) {
                            case 'id': return compare(a.id, b.id, isAsc);
                            case 'ime': return compareString(a.ime, b.ime, isAsc);
                            case 'adresa': return compareString(a.adresa, b.adresa, isAsc);
                            case 'opis': return compareString(a.opis, b.opis, isAsc);
                            case 'grad': return compareString(a.grad, b.grad, isAsc);
                            default: return 0;
                        }
                    });
                };
                return KlinikaComponent;
            }());
            KlinikaComponent.ctorParameters = function () { return [
                { type: src_app_service_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] },
                { type: src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_5__["KlinikaService"] },
                { type: src_app_service_sort_service__WEBPACK_IMPORTED_MODULE_6__["SortService"] }
            ]; };
            KlinikaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-klinika',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./klinika.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/klinika/klinika.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./klinika.component.css */ "./src/app/components/pacijent/klinika/klinika.component.css")).default]
                })
            ], KlinikaComponent);
            function compare(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            function compareString(a, b, isAsc) {
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pacijent.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/pacijent/pacijent.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-weight: bold;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wYWNpamVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0NBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQ0FBcUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhY2lqZW50L3BhY2lqZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBhcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBtbTtcclxuICAgIH1cclxuLmludmVudG9yeS1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjdjbTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3BvY2V0bmEtc3RyYW5pY2Eva2xpbmlrYS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAyY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG4gICAgZm9udDogb3V0bGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pacijent.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/pacijent/pacijent.component.ts ***!
          \***********************************************************/
        /*! exports provided: PacijentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacijentComponent", function () { return PacijentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/AuthService */ "./src/app/service/AuthService.ts");
            var PacijentComponent = /** @class */ (function () {
                function PacijentComponent(router, route, serviceOdjava) {
                    this.router = router;
                    this.route = route;
                    this.serviceOdjava = serviceOdjava;
                }
                PacijentComponent.prototype.ngOnInit = function () {
                };
                PacijentComponent.prototype.profilClick = function () {
                    this.router.navigate(["profil"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.klinikaClick = function () {
                    this.router.navigate(["klinika"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.preglediClick = function () {
                    this.router.navigate(["pregledi"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.odjaviClick = function () {
                    this.serviceOdjava.logOutUser();
                };
                PacijentComponent.prototype.zakazaniPregledi = function () {
                    this.router.navigate(["zakazaniPregledi"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.zakazivanjeClick = function () {
                    this.router.navigate(["zakazivanje"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.istorijaClick = function () {
                    this.router.navigate(["istorija"], { relativeTo: this.route });
                };
                PacijentComponent.prototype.kartonClick = function () {
                    this.router.navigate(["karton"], { relativeTo: this.route });
                };
                return PacijentComponent;
            }());
            PacijentComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_service_AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            PacijentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pacijent',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pacijent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pacijent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pacijent.component.css */ "./src/app/components/pacijent/pacijent.component.css")).default]
                })
            ], PacijentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.css": 
        /*!*************************************************************************************!*\
          !*** ./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.css ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url(\"klinika.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-weight: bold;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wb2NldG5hLXBhY2lqZW50L3BvY2V0bmEtcGFjaWplbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0FBQ0o7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wb2NldG5hLXBhY2lqZW50L3BvY2V0bmEtcGFjaWplbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuN2NtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwia2xpbmlrYS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAyY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG4gICAgZm9udDogb3V0bGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.ts ***!
          \************************************************************************************/
        /*! exports provided: PocetnaPacijentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaPacijentComponent", function () { return PocetnaPacijentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PocetnaPacijentComponent = /** @class */ (function () {
                function PocetnaPacijentComponent() {
                }
                PocetnaPacijentComponent.prototype.ngOnInit = function () {
                };
                return PocetnaPacijentComponent;
            }());
            PocetnaPacijentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pocetna-pacijent',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pocetna-pacijent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pocetna-pacijent.component.css */ "./src/app/components/pacijent/pocetna-pacijent/pocetna-pacijent.component.css")).default]
                })
            ], PocetnaPacijentComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pregled/pregled.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/pacijent/pregled/pregled.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wcmVnbGVkL3ByZWdsZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0FBQ0o7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxzSEFBc0g7O0FBRTFIO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjs7RUFFcEI7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wcmVnbGVkL3ByZWdsZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuN2NtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vcG9jZXRuYS1wYWNpamVudC9rbGluaWthLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDJjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4uYW55Q2xhc3Mge1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/pregled/pregled.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/components/pacijent/pregled/pregled.component.ts ***!
          \******************************************************************/
        /*! exports provided: PregledComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PregledComponent", function () { return PregledComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pregled.service */ "./src/app/service/pregled.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var PregledComponent = /** @class */ (function () {
                function PregledComponent(service, datePipe, toastr) {
                    this.service = service;
                    this.datePipe = datePipe;
                    this.toastr = toastr;
                    this.pregledi = [];
                    this.danasnjiDatum = new Date;
                }
                PregledComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.preuzmiDostupnePreglede().subscribe(function (data) {
                        var e_4, _a;
                        _this.pregledi = data;
                        try {
                            for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var date = _c.value;
                                date.medium = _this.datePipe.transform(date.termin, "MMM d, y");
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                PregledComponent.prototype.transformDate = function (date) {
                    this.datePipe.transform(date, 'yyyy-MM-dd'); //whatever format you need. 
                };
                PregledComponent.prototype.zakaziDostupniPregled = function (pregled) {
                    var _this = this;
                    this.toastr.info("Molimo sacekajte, u toku je zakazivanje pregleda");
                    this.service.zakaziDostupniPregled(pregled).subscribe(function (data) {
                        _this.toastr.warning("Pregled je moguce otkazati najkasnije 24h prije pocetka!", "Upozorenje!", {
                            timeOut: 6000
                        });
                        _this.toastr.success("Uspjesno ste zakazali pregled");
                        _this.service.preuzmiDostupnePreglede().subscribe(function (data) {
                            var e_5, _a;
                            _this.pregledi = data;
                            try {
                                for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var date = _c.value;
                                    date.medium = _this.datePipe.transform(date.termin, "MMM d, y");
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        console.log(error);
                    });
                };
                return PregledComponent;
            }());
            PregledComponent.ctorParameters = function () { return [
                { type: src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__["PregledService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            PregledComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pregled',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pregled.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/pregled/pregled.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pregled.component.css */ "./src/app/components/pacijent/pregled/pregled.component.css")).default]
                })
            ], PregledComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/profil/profil.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/pacijent/profil/profil.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.jumbotron2{\r\n    margin: 1cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\nbutton{\r\n    font-size:15px;\r\n    margin: 10px;\r\n    height:40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQ0FBd0Q7SUFDeEQsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksc0hBQXNIOztBQUUxSDtBQUNBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7O0VBRXBCO0FBQ0E7SUFDRSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhY2lqZW50L3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuN2NtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vcG9jZXRuYS1wYWNpamVudC9rbGluaWthLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDJjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uanVtYm90cm9uMntcclxuICAgIG1hcmdpbjogMWNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigwLCA0NywgMjU1KTtcclxuICAgIGZvbnQ6IG91dGxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5uYXYtbGlua3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5hbnlDbGFzcyB7XHJcbiAgICBcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/profil/profil.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/pacijent/profil/profil.component.ts ***!
          \****************************************************************/
        /*! exports provided: ProfilComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function () { return ProfilComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/korisnik.service */ "./src/app/service/korisnik.service.ts");
            /* harmony import */ var src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Korisnik */ "./src/app/model/Korisnik.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            var ProfilComponent = /** @class */ (function () {
                function ProfilComponent(router, route, service, toastr, modalService) {
                    this.router = router;
                    this.route = route;
                    this.service = service;
                    this.toastr = toastr;
                    this.modalService = modalService;
                    this.trenutniKorisnik = new src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_4__["Korisnik"]();
                    this.ime = "";
                    this.prezime = "";
                    this.email = "";
                    this.grad = "";
                }
                ProfilComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.vratiTrenutnogKorisnika().subscribe(function (data) {
                        _this.trenutniKorisnik = data;
                    }, function (error) {
                        console.log(error);
                    });
                };
                ProfilComponent.prototype.odustani = function () {
                    this.router.navigate(["pocetnaPacijent"], { relativeTo: this.route });
                };
                ProfilComponent.prototype.izmijeniPodatke = function () {
                    var _this = this;
                    this.service.izmjenaPodataka(this.trenutniKorisnik).subscribe(function (data) {
                        _this.toastr.success("Uspjesno ste promijenili podatke!", _this.trenutniKorisnik.ime);
                    }, function (error) {
                    });
                };
                ProfilComponent.prototype.izmijeniLozinku = function (template) {
                    this.modalRef = this.modalService.show(template);
                };
                ProfilComponent.prototype.izmijeniLozinku2 = function () {
                    var _this = this;
                    this.service.izmjenaLozinke(this.novaLozinka).subscribe(function (data) {
                        _this.toastr.success("Uspjesno ste promijenili lozinku!");
                    }, function (error) {
                        _this.toastr.success("Uspjesno ste promijenili lozinkurac!");
                    });
                    this.modalRef.hide();
                };
                ProfilComponent.prototype.odustaniOdIzmjene = function () {
                    this.modalRef.hide();
                };
                return ProfilComponent;
            }());
            ProfilComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_3__["KorisnikService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
                { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
            ]; };
            ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profil',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/profil/profil.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profil.component.css */ "./src/app/components/pacijent/profil/profil.component.css")).default]
                })
            ], ProfilComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC96YWthemFuaS1wcmVnbGVkaS96YWthemFuaS1wcmVnbGVkaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0NBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLHNIQUFzSDs7QUFFMUg7QUFDQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCOztFQUVwQjtBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhY2lqZW50L3pha2F6YW5pLXByZWdsZWRpL3pha2F6YW5pLXByZWdsZWRpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBhcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBtbTtcclxuICAgIH1cclxuLmludmVudG9yeS1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjdjbTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3BvY2V0bmEtcGFjaWplbnQva2xpbmlrYS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAyY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG4gICAgZm9udDogb3V0bGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmFueUNsYXNzIHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgXHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: ZakazaniPreglediComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZakazaniPreglediComponent", function () { return ZakazaniPreglediComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pregled.service */ "./src/app/service/pregled.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ZakazaniPreglediComponent = /** @class */ (function () {
                function ZakazaniPreglediComponent(service, datePipe, toastr) {
                    this.service = service;
                    this.datePipe = datePipe;
                    this.toastr = toastr;
                    this.pregledi = [];
                    this.danasnjiDatum = new Date;
                }
                ZakazaniPreglediComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.preuzmiZakazanePreglede().subscribe(function (data) {
                        var e_6, _a;
                        _this.pregledi = data;
                        try {
                            for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var date = _c.value;
                                date.medium = _this.datePipe.transform(date.termin, "MMM d, y");
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                ZakazaniPreglediComponent.prototype.otkaziPregled = function (pregled) {
                    var _this = this;
                    this.otkazDatum = new Date(pregled.termin);
                    if ((this.otkazDatum.getTime() - this.danasnjiDatum.getTime()) < 86400000) {
                        this.toastr.error("Pregled nije moguce otkazati, jer je manje od 24h do pocetka!");
                    }
                    else {
                        this.service.otkaziPregled(pregled).subscribe(function (data) {
                            _this.toastr.success("Uspjesno ste otkazali pregled!");
                            _this.service.preuzmiZakazanePreglede().subscribe(function (data) {
                                var e_7, _a;
                                _this.pregledi = data;
                                try {
                                    for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var date = _c.value;
                                        date.medium = _this.datePipe.transform(date.termin, "MMM d, y");
                                    }
                                }
                                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    }
                                    finally { if (e_7) throw e_7.error; }
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }, function (error) {
                            console.log(error);
                        });
                    }
                };
                return ZakazaniPreglediComponent;
            }());
            ZakazaniPreglediComponent.ctorParameters = function () { return [
                { type: src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__["PregledService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
            ]; };
            ZakazaniPreglediComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-zakazani-pregledi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zakazani-pregledi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zakazani-pregledi.component.css */ "./src/app/components/pacijent/zakazani-pregledi/zakazani-pregledi.component.css")).default]
                })
            ], ZakazaniPreglediComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.css": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.css ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    align-items: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.jumbotron2{\r\n    margin: 1cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\n.thead, .tbody{\r\n      margin-left: 5cm;\r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC96YWtheml2YW5qZS1wcmVnbGVkYS96YWtheml2YW5qZS1wcmVnbGVkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDtBQUNKO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0NBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7QUFDSjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxzSEFBc0g7O0FBRTFIO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGtCQUFrQjs7RUFFcEI7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjtBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhY2lqZW50L3pha2F6aXZhbmplLXByZWdsZWRhL3pha2F6aXZhbmplLXByZWdsZWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBhcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBtbTtcclxuICAgIH1cclxuLmludmVudG9yeS1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IC0wLjdjbTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3BvY2V0bmEtcGFjaWplbnQva2xpbmlrYS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAyY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigwLCA0NywgMjU1KTtcclxuICAgIGZvbnQ6IG91dGxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5qdW1ib3Ryb24ye1xyXG4gICAgbWFyZ2luOiAxY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG4gICAgZm9udDogb3V0bGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmFueUNsYXNzIHtcclxuICAgIFxyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAudGhlYWQsIC50Ym9keXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVjbTtcclxuICB9XHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: ZakazivanjePregledaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZakazivanjePregledaComponent", function () { return ZakazivanjePregledaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/klinika.service */ "./src/app/service/klinika.service.ts");
            /* harmony import */ var src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pregled.service */ "./src/app/service/pregled.service.ts");
            /* harmony import */ var src_app_model_Pregled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Pregled */ "./src/app/model/Pregled.ts");
            /* harmony import */ var src_app_model_Klinika__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Klinika */ "./src/app/model/Klinika.ts");
            /* harmony import */ var src_app_model_Ljekar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/Ljekar */ "./src/app/model/Ljekar.ts");
            /* harmony import */ var src_app_model_TipPregleda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/TipPregleda */ "./src/app/model/TipPregleda.ts");
            /* harmony import */ var src_app_service_ljekar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/ljekar.service */ "./src/app/service/ljekar.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var src_app_model_Termin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/Termin */ "./src/app/model/Termin.ts");
            /* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ZakazivanjePregledaComponent = /** @class */ (function () {
                function ZakazivanjePregledaComponent(serviceKlinika, servicePregled, serviceLjekar, toastr, modalService, route, router) {
                    this.serviceKlinika = serviceKlinika;
                    this.servicePregled = servicePregled;
                    this.serviceLjekar = serviceLjekar;
                    this.toastr = toastr;
                    this.modalService = modalService;
                    this.route = route;
                    this.router = router;
                    this.prikazTabeleKlinike = false;
                    this.prikazTabeleLjekara = false;
                    this.sviTipoviPregleda = [];
                    this.sviTipoviPregledaLjekari = [];
                    this.klinike = [];
                    this.ljekari = [];
                    this.pregled = new src_app_model_TipPregleda__WEBPACK_IMPORTED_MODULE_7__["TipPregleda"]();
                    this.tipLjekar = new src_app_model_TipPregleda__WEBPACK_IMPORTED_MODULE_7__["TipPregleda"]();
                    this.imeLjekaraPretraga = "";
                    this.prezimeLjekaraPretraga = "";
                    this.ljekar = new src_app_model_Ljekar__WEBPACK_IMPORTED_MODULE_6__["Ljekar"]();
                    this.zakazaniPregled = new src_app_model_Pregled__WEBPACK_IMPORTED_MODULE_4__["Pregled"]();
                    this.status = "ZAKAZAN";
                    this.klinikaZaPregled = new src_app_model_Klinika__WEBPACK_IMPORTED_MODULE_5__["Klinika"]();
                    this.validacija = true;
                    this.lokacijaKlinike = "";
                    this.sviTermini = [];
                    this.terminLj = new src_app_model_Termin__WEBPACK_IMPORTED_MODULE_10__["Termin"]();
                }
                ZakazivanjePregledaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.servicePregled.preuzmiTipovePregleda().subscribe(function (data) {
                        _this.sviTipoviPregleda = data;
                        _this.sviTipoviPregledaLjekari = data;
                    }, function (error) {
                        console.log(error);
                    });
                };
                ZakazivanjePregledaComponent.prototype.pretraziKlinike = function () {
                    var _this = this;
                    if (this.datumPregleda == null) {
                        this.toastr.error("Morate izabrati datum pregleda");
                        this.validacija = false;
                    }
                    if (this.pregled.ime == "") {
                        this.toastr.error("Morate izabrati tip pregleda");
                        this.validacija = false;
                    }
                    if (!this.validacija) {
                        this.validacija = true;
                    }
                    else {
                        console.log(this.pregled.ime);
                        this.prikazTabeleKlinike = true;
                        this.serviceKlinika.pretragaKlinika(this.pregled.ime, this.ocjenaKlinike, this.lokacijaKlinike).subscribe(function (data) {
                            _this.klinike = data.klinike;
                            _this.cijena = data.cijenaPregleda;
                        });
                    }
                };
                ZakazivanjePregledaComponent.prototype.prikaziLjekare = function (klinika) {
                    this.prikazTabeleLjekara = true;
                    this.ljekari = klinika.ljekari;
                    this.klinikaZaPregled = klinika;
                };
                ZakazivanjePregledaComponent.prototype.prikaziTermine = function (template, ljekar) {
                    this.modalRef = this.modalService.show(template);
                    this.sviTermini = ljekar.termini;
                    this.ljekar = ljekar;
                };
                ZakazivanjePregledaComponent.prototype.izaberiTermin = function () {
                    this.zakazaniPregled.vrijeme = this.terminLj.termin;
                };
                ZakazivanjePregledaComponent.prototype.pretraziLjekare = function () {
                    var _this = this;
                    this.serviceLjekar.pretragaLjekara(this.imeLjekaraPretraga, this.prezimeLjekaraPretraga, this.ocjenaLjekara, this.ljekari).subscribe(function (data) {
                        _this.ljekari = data;
                    });
                };
                ZakazivanjePregledaComponent.prototype.zakaziPregled = function () {
                    var _this = this;
                    this.modalRef.hide();
                    this.zakazaniPregled.tipPregleda = this.pregled;
                    this.zakazaniPregled.cijena = this.pregled.cijena;
                    this.zakazaniPregled.stanje = this.status;
                    this.zakazaniPregled.klinika = this.klinikaZaPregled;
                    this.zakazaniPregled.ljekar = this.ljekar;
                    this.zakazaniPregled.termin = this.datumPregleda;
                    //this.zakazaniPregled.vrijeme=this.terminLj.termin;
                    this.zakazaniPregled.vrijemepom = this.terminLj;
                    this.router.navigate(["karton"], { relativeTo: this.route });
                    if (this.datumPregleda > this.ljekar.godisnji_od && this.datumPregleda < this.ljekar.godisnji_do) {
                        this.toastr.error("Izabrani ljekar je na godisnjem odmoru u periodu od " + this.ljekar.godisnji_od + " do " + this.ljekar.godisnji_do);
                    }
                    else {
                        this.toastr.info("Molimo sacekajte, u toku je zakazivanje pregleda");
                        this.servicePregled.zakaziNoviPregled(this.zakazaniPregled).subscribe(function (data) {
                            _this.toastr.success("Uspjesno ste zakazali pregled");
                        }, function (error) {
                            _this.toastr.error("Vec imate zakazan pregled u tom terminu!");
                        });
                    }
                };
                return ZakazivanjePregledaComponent;
            }());
            ZakazivanjePregledaComponent.ctorParameters = function () { return [
                { type: src_app_service_klinika_service__WEBPACK_IMPORTED_MODULE_2__["KlinikaService"] },
                { type: src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_3__["PregledService"] },
                { type: src_app_service_ljekar_service__WEBPACK_IMPORTED_MODULE_8__["LjekarService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] },
                { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsModalService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
            ]; };
            ZakazivanjePregledaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-zakazivanje-pregleda',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zakazivanje-pregleda.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zakazivanje-pregleda.component.css */ "./src/app/components/pacijent/zakazivanje-pregleda/zakazivanje-pregleda.component.css")).default]
                })
            ], ZakazivanjePregledaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.css": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.css ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {\r\n    \r\n    height:500px;\r\n    overflow-y: scroll;\r\n    \r\n  }\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWNpamVudC96ZHJhdnN0dmVuaS1rYXJ0b24vemRyYXZzdHZlbmkta2FydG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQ0FBd0Q7SUFDeEQsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksc0hBQXNIOztBQUUxSDtBQUNBOztJQUVJLFlBQVk7SUFDWixrQkFBa0I7O0VBRXBCO0FBQ0E7SUFDRSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFjaWplbnQvemRyYXZzdHZlbmkta2FydG9uL3pkcmF2c3R2ZW5pLWthcnRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgYXBwLXJvb3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwbW07XHJcbiAgICB9XHJcbi5pbnZlbnRvcnktYm9keSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC43Y207XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9wb2NldG5hLXBhY2lqZW50L2tsaW5pa2EuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODUlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbjogMmNtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigwLCA0NywgMjU1KTtcclxuICAgIGZvbnQ6IG91dGxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5uYXYtbGlua3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5hbnlDbGFzcyB7XHJcbiAgICBcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIFxyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.ts ***!
          \****************************************************************************************/
        /*! exports provided: ZdravstveniKartonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZdravstveniKartonComponent", function () { return ZdravstveniKartonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pregled.service */ "./src/app/service/pregled.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var ZdravstveniKartonComponent = /** @class */ (function () {
                function ZdravstveniKartonComponent(service, datePipe) {
                    this.service = service;
                    this.datePipe = datePipe;
                    this.pregledi = [];
                }
                ZdravstveniKartonComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.service.preuzmiZakazanePreglede().subscribe(function (data) {
                        var e_8, _a;
                        _this.pregledi = data;
                        try {
                            for (var _b = __values(_this.pregledi), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var date = _c.value;
                                date.medium = _this.datePipe.transform(date.termin, "MMM d, y");
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                    }, function (error) {
                        console.log(error);
                    });
                };
                return ZdravstveniKartonComponent;
            }());
            ZdravstveniKartonComponent.ctorParameters = function () { return [
                { type: src_app_service_pregled_service__WEBPACK_IMPORTED_MODULE_2__["PregledService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
            ]; };
            ZdravstveniKartonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-zdravstveni-karton',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./zdravstveni-karton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./zdravstveni-karton.component.css */ "./src/app/components/pacijent/zdravstveni-karton/zdravstveni-karton.component.css")).default]
                })
            ], ZdravstveniKartonComponent);
            /***/ 
        }),
        /***/ "./src/app/components/pocetna-stranica/pocetna-stranica.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/pocetna-stranica/pocetna-stranica.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: -0.7cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;}\r\n.nav-link{\r\n    font-weight: bold;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2NldG5hLXN0cmFuaWNhL3BvY2V0bmEtc3RyYW5pY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9DQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0FBQ0o7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDLENBQUM7QUFDMUM7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2NldG5hLXN0cmFuaWNhL3BvY2V0bmEtc3RyYW5pY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuN2NtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vcG9jZXRuYS1zdHJhbmljYS9rbGluaWthLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDJjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjt9XHJcbi5uYXYtbGlua3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/pocetna-stranica/pocetna-stranica.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/pocetna-stranica/pocetna-stranica.component.ts ***!
          \***************************************************************************/
        /*! exports provided: PocetnaStranicaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaStranicaComponent", function () { return PocetnaStranicaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PocetnaStranicaComponent = /** @class */ (function () {
                function PocetnaStranicaComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                PocetnaStranicaComponent.prototype.ngOnInit = function () {
                };
                PocetnaStranicaComponent.prototype.prijavaClick = function () {
                    this.router.navigate(["login"]);
                };
                PocetnaStranicaComponent.prototype.registracijaClick = function () {
                    this.router.navigate(["registracija"]);
                };
                return PocetnaStranicaComponent;
            }());
            PocetnaStranicaComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            PocetnaStranicaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pocetna-stranica',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pocetna-stranica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pocetna-stranica/pocetna-stranica.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pocetna-stranica.component.css */ "./src/app/components/pocetna-stranica/pocetna-stranica.component.css")).default]
                })
            ], PocetnaStranicaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/prijava/prijava.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/prijava/prijava.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    font-size: 15px;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: 0cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\nbutton{\r\n    font-size:15px;\r\n    margin: 10px;\r\n    height:40px;\r\n    width:110px;\r\n}\r\ninput{\r\n    width: 500px;\r\n    font-size: 15px;\r\n}\r\nlabel{\r\n    width: 450px;\r\n    font-size: 15px;\r\n    margin-top: 4px;\r\n}\r\n.invalid-feedback{\r\n    font-size: 15px;\r\n}\r\n.toast-error{\r\n    font-size: 15px;\r\n}\r\n.toast-body{\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmlqYXZhL3ByaWphdmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0o7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixvQ0FBd0Q7SUFDeEQsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksc0hBQXNIO0FBQzFIO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcmlqYXZhL3ByaWphdmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHksIGFwcC1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMG1tO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4uaW52ZW50b3J5LWJvZHkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMGNtO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vcG9jZXRuYS1zdHJhbmljYS9rbGluaWthLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbi5qdW1ib3Ryb257XHJcbiAgICBtYXJnaW46IDJjbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoMCwgNDcsIDI1NSk7XHJcbiAgICBmb250OiBvdXRsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOjExMHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmxhYmVse1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4udG9hc3QtZXJyb3J7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50b2FzdC1ib2R5e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/prijava/prijava.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/prijava/prijava.component.ts ***!
          \*********************************************************/
        /*! exports provided: PrijavaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrijavaComponent", function () { return PrijavaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/Korisnik */ "./src/app/model/Korisnik.ts");
            /* harmony import */ var src_app_service_AuthService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/AuthService */ "./src/app/service/AuthService.ts");
            /* harmony import */ var src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/korisnik.service */ "./src/app/service/korisnik.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var PrijavaComponent = /** @class */ (function () {
                function PrijavaComponent(toastr, authService, router, route, userService, serviceOdjava) {
                    this.toastr = toastr;
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.userService = userService;
                    this.serviceOdjava = serviceOdjava;
                    this.user = new src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_3__["Korisnik"]();
                    this.validacija = true;
                    this.validacijaKorisnickoIme = false;
                    this.validacijaLozinka = false;
                    if (!this.authService.isUserLogged()) {
                        this.router.navigate(['/login']);
                    }
                    else {
                        if (localStorage.getItem("ROLE") == "ADMIN_SISTEM") {
                            this.router.navigate(['/adminSistema']);
                        }
                        else if (localStorage.getItem("ROLE") == "REGISTROVAN") {
                            this.router.navigate(['/registrovan']);
                        }
                    }
                }
                PrijavaComponent.prototype.ngOnInit = function () {
                };
                PrijavaComponent.prototype.clickLogIn = function () {
                    var _this = this;
                    if (this.user.username == "") {
                        this.validacijaKorisnickoIme = true;
                        this.validacija = false;
                    }
                    if (this.user.password == "") {
                        this.validacijaLozinka = true;
                        this.validacija = false;
                    }
                    if (!this.validacija) {
                        this.toastr.warning("Neuspjesna prijava");
                        this.validacija = true;
                    }
                    else {
                        this.authService.login(this.user).subscribe(function (success) {
                            if (!success) {
                                _this.toastr.error("Neispravni kredencijali");
                            }
                            else {
                                _this.authService.getCurrentUser().subscribe(function (data) {
                                    localStorage.setItem("ROLE", data.role);
                                    localStorage.setItem("USERNAME", data.username);
                                    if (localStorage.getItem("ROLE") == "REGISTROVAN") {
                                        _this.router.navigate(["/registrovan"]);
                                    }
                                    else {
                                        _this.router.navigate(["/pocetna"]);
                                    }
                                });
                            }
                        });
                    }
                };
                PrijavaComponent.prototype.odustani = function () {
                    this.router.navigate(['/pocetna']);
                };
                return PrijavaComponent;
            }());
            PrijavaComponent.ctorParameters = function () { return [
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
                { type: src_app_service_AuthService__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_5__["KorisnikService"] },
                { type: src_app_service_AuthService__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            PrijavaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-prijava',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prijava.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prijava/prijava.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prijava.component.css */ "./src/app/components/prijava/prijava.component.css")).default]
                })
            ], PrijavaComponent);
            /***/ 
        }),
        /***/ "./src/app/components/registracija/registracija.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/registracija/registracija.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body, app-root {\r\n    height: 100%;\r\n    margin: 0mm;\r\n    }\r\n.inventory-body {\r\n    position: fixed;\r\n    margin-top: 0cm;\r\n    min-width: 100%;\r\n    background-image: url('klinika.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 85%;\r\n    background-position: center;\r\n    background-size: cover;\r\n    opacity: 0.7;\r\n    }\r\n.jumbotron{\r\n    margin: 2cm;\r\n    text-align: center;\r\n    color: rgb(0, 47, 255);\r\n    font: outline;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.nav-link{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n\r\n}\r\n.anyClass {  \r\n    height:500px;\r\n    overflow-y: scroll;   \r\n  }\r\n.lijevo{\r\n    text-align: left;\r\n}\r\ninput{\r\n    width: 500px;\r\n    font-size: 15px;\r\n}\r\nlabel{\r\n    width: 450px;\r\n    font-size: 15px;\r\n    margin-top: 4px;\r\n}\r\nbutton{\r\n    font-size:15px;\r\n    margin: 10px;\r\n    height:40px;\r\n    width:110px;\r\n}\r\np{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n.invalid-feedback{\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYWNpamEvcmVnaXN0cmFjaWphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixvQ0FBd0Q7SUFDeEQsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksc0hBQXNIOztBQUUxSDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYWNpamEvcmVnaXN0cmFjaWphLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5LCBhcHAtcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBtbTtcclxuICAgIH1cclxuLmludmVudG9yeS1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDBjbTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3BvY2V0bmEtc3RyYW5pY2Eva2xpbmlrYS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4uanVtYm90cm9ue1xyXG4gICAgbWFyZ2luOiAyY207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ3LCAyNTUpO1xyXG4gICAgZm9udDogb3V0bGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuLmFueUNsYXNzIHsgIFxyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAgIFxyXG4gIH1cclxuLmxpamV2b3tcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuaW5wdXR7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxubGFiZWx7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOjExMHB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/registracija/registracija.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/registracija/registracija.component.ts ***!
          \*******************************************************************/
        /*! exports provided: RegistracijaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistracijaComponent", function () { return RegistracijaComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Korisnik */ "./src/app/model/Korisnik.ts");
            /* harmony import */ var src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/korisnik.service */ "./src/app/service/korisnik.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var RegistracijaComponent = /** @class */ (function () {
                function RegistracijaComponent(korisnikService, router, toastr, formBuilder) {
                    this.korisnikService = korisnikService;
                    this.router = router;
                    this.toastr = toastr;
                    this.formBuilder = formBuilder;
                    this.korisnik = new src_app_model_Korisnik__WEBPACK_IMPORTED_MODULE_2__["Korisnik"]();
                    this.validacija = true;
                    this.validacijaIme = false;
                    this.validacijaPrezime = false;
                    this.validacijaMail = false;
                    this.validacijaAdresa = false;
                    this.validacijaGrad = false;
                    this.validacijaDrzava = false;
                    this.validacijaBroj = false;
                    this.validacijaJedinstveni = false;
                    this.validacijaLozinka = false;
                    this.ponovljenaLozinka = "";
                    this.validacijaLozinkaPonovljena = false;
                }
                RegistracijaComponent.prototype.ngOnInit = function () {
                };
                RegistracijaComponent.prototype.registujSe = function () {
                    var _this = this;
                    if (this.korisnik.ime == "") {
                        this.validacijaIme = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.prezime == "") {
                        this.validacijaPrezime = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.email == "") {
                        this.validacijaMail = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.adresa == "") {
                        this.validacijaAdresa = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.grad == "") {
                        this.validacijaGrad = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.drzava == "") {
                        this.validacijaDrzava = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.brojTelefona == null) {
                        this.validacijaBroj = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.jedinstveniBroj == null) {
                        this.validacijaJedinstveni = true;
                        this.validacija = false;
                    }
                    if (this.korisnik.password == "") {
                        this.validacijaLozinka = true;
                        this.validacija = false;
                    }
                    if (this.ponovljenaLozinka != this.korisnik.password) {
                        this.toastr.error("Lozinke se ne poklapaju");
                        this.validacijaLozinkaPonovljena = true;
                        this.validacija = false;
                    }
                    if (!validateEmail(this.korisnik.email)) {
                        this.toastr.error("E-mail nije validan");
                        this.validacija = false;
                    }
                    if (!this.validacija) {
                        this.toastr.warning("Neuspjesna registracija");
                        this.validacija = true;
                    }
                    else {
                        this.korisnik.username = this.korisnik.email;
                        this.korisnikService.registracija(this.korisnik).subscribe(function (data) {
                            _this.toastr.info("Dobicete e-mail za verifikaciju!");
                        }, function (error) {
                            _this.toastr.error("Nalog sa navedenom e-mail adresom vec postoji!");
                        });
                    }
                };
                RegistracijaComponent.prototype.odustani = function () {
                    this.router.navigate(['/pocetna']);
                };
                return RegistracijaComponent;
            }());
            RegistracijaComponent.ctorParameters = function () { return [
                { type: src_app_service_korisnik_service__WEBPACK_IMPORTED_MODULE_3__["KorisnikService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
            ]; };
            RegistracijaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registracija',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registracija.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registracija/registracija.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registracija.component.css */ "./src/app/components/registracija/registracija.component.css")).default]
                })
            ], RegistracijaComponent);
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return re.test(email);
            }
            /***/ 
        }),
        /***/ "./src/app/guards/AuthGuard.ts": 
        /*!*************************************!*\
          !*** ./src/app/guards/AuthGuard.ts ***!
          \*************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/AuthService */ "./src/app/service/AuthService.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this.authService.isUserLogged()) {
                        this.router.navigate(['/registrovan']);
                    }
                    return !this.authService.isUserLogged();
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _service_AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/guards/PacijentGuard.ts": 
        /*!*****************************************!*\
          !*** ./src/app/guards/PacijentGuard.ts ***!
          \*****************************************/
        /*! exports provided: PacijentGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacijentGuard", function () { return PacijentGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/AuthService */ "./src/app/service/AuthService.ts");
            var PacijentGuard = /** @class */ (function () {
                function PacijentGuard(authService, router) {
                    this.authService = authService;
                    this.router = router;
                }
                PacijentGuard.prototype.canActivate = function () {
                    return this.canLoad();
                };
                PacijentGuard.prototype.canLoad = function () {
                    if (!this.authService.isUserLogged()) {
                        this.router.navigate(['/login']);
                    }
                    return this.authService.isUserLogged();
                };
                return PacijentGuard;
            }());
            PacijentGuard.ctorParameters = function () { return [
                { type: _service_AuthService__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            PacijentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PacijentGuard);
            /***/ 
        }),
        /***/ "./src/app/http-interceptor/AuthInterceptor.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/http-interceptor/AuthInterceptor.ts ***!
          \*****************************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor() {
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var token = localStorage.getItem("AGENT_JWT_TOKEN");
                    if (!token) {
                        return next.handle(req);
                    }
                    var req1 = req.clone({
                        headers: req.headers.set('Authorization', "Bearer " + token),
                    });
                    return next.handle(req1);
                };
                return AuthInterceptor;
            }());
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/model/Klinika.ts": 
        /*!**********************************!*\
          !*** ./src/app/model/Klinika.ts ***!
          \**********************************/
        /*! exports provided: Klinika */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Klinika", function () { return Klinika; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Klinika = /** @class */ (function () {
                function Klinika() {
                    this.ime = "";
                    this.adresa = "";
                    this.opis = "";
                    this.ljekari = [];
                    this.pregledi = [];
                    this.grad = "";
                }
                return Klinika;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Korisnik.ts": 
        /*!***********************************!*\
          !*** ./src/app/model/Korisnik.ts ***!
          \***********************************/
        /*! exports provided: Korisnik */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Korisnik", function () { return Korisnik; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Korisnik = /** @class */ (function () {
                function Korisnik() {
                    this.username = "";
                    this.ime = "";
                    this.prezime = "";
                    this.email = "";
                    this.adresa = "";
                    this.grad = "";
                    this.drzava = "";
                    this.password = "";
                }
                return Korisnik;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Ljekar.ts": 
        /*!*********************************!*\
          !*** ./src/app/model/Ljekar.ts ***!
          \*********************************/
        /*! exports provided: Ljekar */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ljekar", function () { return Ljekar; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Ljekar = /** @class */ (function () {
                function Ljekar() {
                    this.ime = "";
                    this.prezime = "";
                    this.pregledi = [];
                    this.termini = [];
                }
                return Ljekar;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Pregled.ts": 
        /*!**********************************!*\
          !*** ./src/app/model/Pregled.ts ***!
          \**********************************/
        /*! exports provided: Pregled */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pregled", function () { return Pregled; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _Ljekar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ljekar */ "./src/app/model/Ljekar.ts");
            /* harmony import */ var _Klinika__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Klinika */ "./src/app/model/Klinika.ts");
            /* harmony import */ var _TipPregleda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TipPregleda */ "./src/app/model/TipPregleda.ts");
            /* harmony import */ var _Termin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Termin */ "./src/app/model/Termin.ts");
            var Pregled = /** @class */ (function () {
                function Pregled() {
                    this.tipPregleda = new _TipPregleda__WEBPACK_IMPORTED_MODULE_3__["TipPregleda"]();
                    this.ljekar = new _Ljekar__WEBPACK_IMPORTED_MODULE_1__["Ljekar"]();
                    this.medium = "";
                    this.stanje = "";
                    this.klinika = new _Klinika__WEBPACK_IMPORTED_MODULE_2__["Klinika"]();
                    this.vrijemepom = new _Termin__WEBPACK_IMPORTED_MODULE_4__["Termin"]();
                }
                return Pregled;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Student.ts": 
        /*!**********************************!*\
          !*** ./src/app/model/Student.ts ***!
          \**********************************/
        /*! exports provided: Student */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function () { return Student; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Student = /** @class */ (function () {
                function Student() {
                    this.firstName = "";
                    this.lastName = "";
                }
                return Student;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/Termin.ts": 
        /*!*********************************!*\
          !*** ./src/app/model/Termin.ts ***!
          \*********************************/
        /*! exports provided: Termin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Termin", function () { return Termin; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _Ljekar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ljekar */ "./src/app/model/Ljekar.ts");
            var Termin = /** @class */ (function () {
                function Termin() {
                    this.ljekar = new _Ljekar__WEBPACK_IMPORTED_MODULE_1__["Ljekar"]();
                }
                return Termin;
            }());
            /***/ 
        }),
        /***/ "./src/app/model/TipPregleda.ts": 
        /*!**************************************!*\
          !*** ./src/app/model/TipPregleda.ts ***!
          \**************************************/
        /*! exports provided: TipPregleda */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipPregleda", function () { return TipPregleda; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TipPregleda = /** @class */ (function () {
                function TipPregleda() {
                    this.ime = "";
                    this.ljekari = [];
                    this.klinike = [];
                }
                return TipPregleda;
            }());
            /***/ 
        }),
        /***/ "./src/app/service/AuthService.ts": 
        /*!****************************************!*\
          !*** ./src/app/service/AuthService.ts ***!
          \****************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
            /* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                }
                AuthService.prototype.login = function (user) {
                    var _this = this;
                    return this.http.post("api/login", { username: user.username, password: user.password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.doLoginUser(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
                    }));
                };
                AuthService.prototype.getCurrentUser = function () {
                    return this.http.get('api/korisnici/getCurrentUser');
                };
                AuthService.prototype.doLoginUser = function (response) {
                    localStorage.setItem("AGENT_JWT_TOKEN", response.jwt);
                    //this.getCurrentUser();
                };
                AuthService.prototype.logOutUser = function () {
                    localStorage.removeItem("AGENT_JWT_TOKEN");
                    localStorage.removeItem("ROLE");
                    localStorage.removeItem("USERNAME");
                    this.router.navigateByUrl('/login');
                };
                AuthService.prototype.isUserLogged = function () {
                    var jwt = localStorage.getItem("AGENT_JWT_TOKEN");
                    if (jwt == null)
                        return false;
                    else if (!this.isTokenExpired())
                        return true;
                };
                AuthService.prototype.getJwt = function () {
                    return localStorage.getItem("AGENT_JWT_TOKEN");
                };
                AuthService.prototype.getTokenExpirationDate = function (token) {
                    var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(token);
                    if (decoded.exp === undefined)
                        return null;
                    var date = new Date(0);
                    date.setUTCSeconds(decoded.exp);
                    return date;
                };
                AuthService.prototype.isTokenExpired = function (token) {
                    if (!token)
                        token = this.getJwt();
                    if (!token)
                        return true;
                    var date = this.getTokenExpirationDate(token);
                    if (date === undefined)
                        return false;
                    return !(date.valueOf() > new Date().valueOf());
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root',
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/service/klinika.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/klinika.service.ts ***!
          \********************************************/
        /*! exports provided: KlinikaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlinikaService", function () { return KlinikaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var KlinikaService = /** @class */ (function () {
                function KlinikaService(http) {
                    this.http = http;
                }
                KlinikaService.prototype.preuzmiSveKlinike = function () {
                    return this.http.get('api/klinike/all');
                };
                KlinikaService.prototype.pretragaKlinika = function (tipPregleda, ocjena, lokacija) {
                    return this.http.post("api/klinike/pretragaKlinika", { tipPregleda: tipPregleda, ocjenaKlinike: ocjena, lokacijaKlinike: lokacija });
                };
                KlinikaService.prototype.ocijeniKliniku = function (ocjena, klinika) {
                    return this.http.post("api/klinike/ocijeniKliniku/" + ocjena, klinika);
                };
                return KlinikaService;
            }());
            KlinikaService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            KlinikaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], KlinikaService);
            /***/ 
        }),
        /***/ "./src/app/service/korisnik.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/service/korisnik.service.ts ***!
          \*********************************************/
        /*! exports provided: KorisnikService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorisnikService", function () { return KorisnikService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var KorisnikService = /** @class */ (function () {
                function KorisnikService(http) {
                    this.http = http;
                }
                KorisnikService.prototype.registracija = function (korisnik) {
                    return this.http.post('api/korisnici/registracija', korisnik);
                };
                KorisnikService.prototype.vratiTrenutnogKorisnika = function () {
                    return this.http.get('api/korisnici/trenutniKorisnik');
                };
                KorisnikService.prototype.izmjenaPodataka = function (korisnik) {
                    return this.http.post('api/korisnici/izmjena', korisnik);
                };
                KorisnikService.prototype.izmjenaLozinke = function (novaLozinka) {
                    return this.http.post('api/korisnici/izmjenaLozinke', novaLozinka);
                };
                return KorisnikService;
            }());
            KorisnikService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            KorisnikService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], KorisnikService);
            /***/ 
        }),
        /***/ "./src/app/service/ljekar.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/service/ljekar.service.ts ***!
          \*******************************************/
        /*! exports provided: LjekarService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LjekarService", function () { return LjekarService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LjekarService = /** @class */ (function () {
                function LjekarService(http) {
                    this.http = http;
                }
                LjekarService.prototype.pretragaLjekara = function (ime, prezime, ocjena, ljekari) {
                    return this.http.post("api/ljekari/pretragaLjekara", { ime: ime, prezime: prezime, ocjena: ocjena, ljekari: ljekari });
                };
                LjekarService.prototype.ocijeniLjekara = function (ocjena, ljekar) {
                    return this.http.post("api/ljekari/ocijeniLjekara/" + ocjena, ljekar);
                };
                return LjekarService;
            }());
            LjekarService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LjekarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LjekarService);
            /***/ 
        }),
        /***/ "./src/app/service/pregled.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/pregled.service.ts ***!
          \********************************************/
        /*! exports provided: PregledService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PregledService", function () { return PregledService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PregledService = /** @class */ (function () {
                function PregledService(http) {
                    this.http = http;
                }
                PregledService.prototype.preuzmiSvePreglede = function () {
                    return this.http.get('api/pregledi/all');
                };
                PregledService.prototype.zakaziDostupniPregled = function (pregled) {
                    return this.http.post("api/pregledi/zakaziDostupni", pregled);
                };
                PregledService.prototype.zakaziNoviPregled = function (pregled) {
                    return this.http.post("api/pregledi/zakaziNovi", pregled);
                };
                PregledService.prototype.otkaziPregled = function (pregled) {
                    return this.http.post("api/pregledi/otkazi", pregled);
                };
                PregledService.prototype.preuzmiZakazanePreglede = function () {
                    return this.http.get('api/pregledi/zakazani');
                };
                PregledService.prototype.preuzmiIstoriju = function () {
                    return this.http.get('api/pregledi/istorija');
                };
                PregledService.prototype.preuzmiDostupnePreglede = function () {
                    return this.http.get('api/pregledi/sviDostupni');
                };
                PregledService.prototype.preuzmiTipovePregleda = function () {
                    return this.http.get('api/tipovi/all');
                };
                return PregledService;
            }());
            PregledService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PregledService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PregledService);
            /***/ 
        }),
        /***/ "./src/app/service/sort.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/sort.service.ts ***!
          \*****************************************/
        /*! exports provided: SortService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortService", function () { return SortService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SortService = /** @class */ (function () {
                function SortService() {
                    this.columnSortedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.columnSorted$ = this.columnSortedSource.asObservable();
                }
                SortService.prototype.columnSorted = function (event) {
                    this.columnSortedSource.next(event);
                };
                return SortService;
            }());
            SortService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SortService);
            /***/ 
        }),
        /***/ "./src/app/service/student.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/service/student.service.ts ***!
          \********************************************/
        /*! exports provided: StudentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function () { return StudentService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var StudentService = /** @class */ (function () {
                function StudentService(http) {
                    this.http = http;
                }
                StudentService.prototype.preuzmiSveStudente = function () {
                    return this.http.get('api/students/all');
                };
                return StudentService;
            }());
            StudentService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], StudentService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Dejan Doder\Documents\GitHub\KlinickiIsa\IsaFrontEnd\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
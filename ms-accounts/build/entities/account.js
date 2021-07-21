"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var typeorm_1 = require("typeorm");
var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Account.prototype, "type", void 0);
    Account = __decorate([
        typeorm_1.Entity()
    ], Account);
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdGllcy9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUF5RDtBQUd6RDtJQUFBO0lBTUEsQ0FBQztJQUpHO1FBREMsd0JBQWMsRUFBRTs7dUNBQ0w7SUFHWjtRQURDLGdCQUFNLEVBQUU7O3lDQUNLO0lBTEwsT0FBTztRQURuQixnQkFBTSxFQUFFO09BQ0ksT0FBTyxDQU1uQjtJQUFELGNBQUM7Q0FBQSxBQU5ELElBTUM7QUFOWSwwQkFBTyJ9
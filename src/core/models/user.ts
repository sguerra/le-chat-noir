/// <reference path="../../../typings/backbone/backbone.d.ts"/>

module Core.Models{
	
	interface IUser{
		uuid: string;
		username: string;
	}
	
	export class User extends Backbone.Model
	{	
		constructor(iuser:IUser){
			super(iuser);
		}
	}
}
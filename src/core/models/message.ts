/// <reference path="../../../typings/backbone/backbone.d.ts"/>
/// <reference path="./user" />

module Core.Models{
	
	interface IMessage{
		sender: User;
		receiver?: User;
		text:string;
		datetime: Date;
	}
	
	export class Message extends Backbone.Model
	{
		constructor(imessage: IMessage){
			super(imessage);
		}
	}
}
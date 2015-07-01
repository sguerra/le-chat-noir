/// <reference path="../../../typings/backbone/backbone.d.ts" />
/// <reference path="../models/user" />

module Core.Collections{
	
	export class Users extends Backbone.Collection<Core.Models.User>
	{	
		constructor(models:Core.Models.User[]) {
			super(models);
		}
	}
	
}
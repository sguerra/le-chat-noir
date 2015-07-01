/// <reference path="../../../typings/backbone/backbone.d.ts" />
/// <reference path="../models/message" />

module Core.Collections{
	
	export class Messages extends Backbone.Collection<Core.Models.Message>
	{
		constructor(models:Core.Models.Message[]) {
			super(models);
		}
	}
	
}
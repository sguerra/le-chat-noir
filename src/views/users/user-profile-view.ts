/// <reference path="../../../typings/backbone/backbone.d.ts" />
/// <reference path="../../core/models/user" />

module Views.Users{
	
	export class UserProfileView extends Backbone.View<Core.Models.User>{
		
		constructor(options:Backbone.ViewOptions<Core.Models.User>){
			super(options);
		}
		
		render():Backbone.View<Core.Models.User>
		{	
			let username = this.model.get("username");
			let template:string = `<span> ${username} </span>`;
			
			this.$el.append(template);
			
			return this;
		}
	}
	
}
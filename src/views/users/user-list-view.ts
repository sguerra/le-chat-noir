/// <reference path="../../../typings/backbone/backbone.d.ts" />
/// <reference path="../../core/models/user" />

module Views.Users{
		
	export class UserListView extends Backbone.View<Core.Models.User>{
		
		constructor(options:Backbone.ViewOptions<Core.Models.User>){
			super(options);
			this.listenTo(this.collection, 'add', this.onAdd);
		}
		
		onAdd(model:UserModel){
			
			let username =  model.get("username");
			
			let template:string = `<li>
				<figure>
					<img src="https://robohash.org/${username}.png" 
					title="${username}"/>
				</figure>
			</li>`;
			
			this.$el.append(template);
		}
		
	}
	
}
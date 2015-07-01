
module Utils{
	
	export class Guid{
		
		public new():string
		{
			return this.s8() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s12();
		}
		
		private s4():string
		{
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}
		
		private s8():string
		{
			return this.s4() + this.s4();
		}
		
		private s12():string
		{
			return this.s4() + this.s4() + this.s4();
		}
	}
}

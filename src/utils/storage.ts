module Utils{

	export class Storage{
		
		has(key:string):boolean{
			return !(!localStorage.getItem(key));
		}
		
		set(key:string, value:string):void{
			localStorage.setItem(key, value);
		}
		
		get(key):any{
			return localStorage.getItem(key);
		}
		
	}
		
}

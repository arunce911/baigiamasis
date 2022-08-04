// Write a JavaScript program that accept two integers and display the larger.

function largesstnum()
			{
				let num1, num2, num3;
				num1 = Number(document.getElementById("fnum").value);
				num2 = Number(document.getElementById("snum").value);

				if(num1>num2)
				{
					window.alert(num1+"-is Larger");
				}
				else if(num2>num1)
				{
					window.alert(num2+"-is Larger");
				}
				else if(num2>num1 && num2>num1)
				{
					window.alert(num2+"is Larger");
				}
			}
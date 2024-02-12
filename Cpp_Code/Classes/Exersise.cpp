/*
Exersise Questions :
    Creating Simple and scientific cal and also inherite them to a Hybrid cal class
    */
// Answer :
#include<iostream>
#include<cmath>
#include <string>
#define _USE_MATH_DEFINES
using namespace std;
class SimpleCal
{
    public :
    SimpleCal()
    {
        num1_P=0;
        num2_P=0;
    }
    SimpleCal(int a , int b)
    {
        num1_P=a;
        num2_P=b;
    }
    protected :
    float num1_P;
    float num2_P;
    public :
    float SimCal (string ch){
    if (ch=="+")
    {
        return num1_P+num2_P;
    }
    else if (ch=="-")
    {
        return num1_P-num2_P;
    }
    else if (ch=="*")
    {
        return num1_P*num2_P;
    }
    else if (ch=="/")
    {
        return num1_P/num2_P;
    }
    else 
    {
        return 0;
    }
    }
};
class SciCal
{
public :
    protected :
    float num1_S;
    float num2_S;
    public :
    SciCal()
    {
        num1_S=0;
        num2_S=0;
    }
    SciCal(int a )
    {
        num1_S=a;
    }
    public :
    float SfiCal (string chs){
    if (chs=="cos" || chs=="Cos" || chs=="COS")
    {
        return (cos(num1_S * M_PI / 180.0)); 
    }
    else if (chs=="sin" || chs=="Sin" || chs=="SIN")
    {
       return (sin(num1_S * M_PI / 180.0)); 
    }
    else if (chs=="tan" || chs=="Tan" || chs=="TAN")
    {
       return (tan(num1_S * M_PI / 180.0)); 
    }    
    else 
    {
        return 0;
    }
    }

};
class HybCal : public SimpleCal , public SciCal
{

    public :
    HybCal()
    {
        num1_P=0;
        num2_P=0;
        num1_S=0;
    }
     HybCal(int a , int b)
    {
        num1_P=a;
        num2_P=b;
    }
      HybCal(int a )
    {
        num1_S=a;
    }
    void PrRes (string chH)
    {
        if (chH=="+" || chH=="-" || chH=="*" || chH=="/")
        {
            cout<<"The result of "<<num1_P<<chH<<num2_P<<"is :"<<SimCal(chH)<<endl;
        }
        else if (chH=="cos" || chH=="Cos" || chH=="COS" || chH=="sin"|| chH=="Sin" ||chH=="SIN" || chH=="tan" || chH=="Tan" || chH=="TAN")
        {
            cout<<"The result of "<<chH<<"("<<num1_S<<")"<<"is :"<<SfiCal(chH)<<endl;
        }
        else
        {
            cout<<"\nSyntax Error!";
        }
    }



};


int main()
{
    string choice , Mch;
    float num1,num2;
        std::cout << "---------------" << std::endl;
        std::cout << "OOPs Calculator" << std::endl;
        std::cout << "---------------" << std::endl;
        std::cout << "Modes" << std::endl;
        std::cout << "1.Simple" << std::endl;
        std::cout << "2.Scientific " << std::endl;
        cin>>choice;
        if (choice=="1")
        {
            cout<<"\nNumber Operand Number";
            cin>>num1>>Mch>>num2;
            HybCal Sim(num1 , num2);
            Sim.PrRes(Mch);
        }
        else if (choice=="2")
        {
            cout<<"\nfunction, value in degrees";
            cin>>Mch>>num1;            
            HybCal Sci(num1 );
            Sci.PrRes(Mch);
        }
        else
        {
            std::cout << "Wrong input!" << std::endl;
        }


/*

---

**OOPs Calculator**

**Modes:**
1. Simple
2. Scientific

**Simple Calculator:**
- This mode allows basic arithmetic operations such as addition, subtraction, multiplication, and division.
- Input two numbers followed by the operator (+, -, *, /).

**Scientific Calculator:**
- This mode provides trigonometric functions (cosine, sine, tangent) in addition to basic arithmetic operations.
- Input the trigonometric function (cos, sin, tan) followed by the angle in degrees.

**Instructions:**
1. Run the program.
2. Select the mode by entering either '1' for Simple or '2' for Scientific.
3. Follow the prompts based on the selected mode:
   - For Simple mode, input two numbers followed by the operator.
   - For Scientific mode, input the trigonometric function followed by the angle.
4. The program will display the result of the calculation.

**Example (Simple Mode):**
```
---------------
OOPs Calculator
---------------
Modes
1. Simple
2. Scientific
1

Enter two numbers and an operator (e.g., 5 + 3): 
5 + 3
The result of 5+3 is :8
```

**Example (Scientific Mode):**
```
---------------
OOPs Calculator
---------------
Modes
1. Simple
2. Scientific
2

Enter a trigonometric function and an angle in degrees (e.g., cos 30): 
sin 45
The result of sin(45) is :0.707107
```

**Notes:**
- For trigonometric functions, angles are expected in degrees.
- Syntax errors will be displayed if input does not match expected formats.

--- 

This manual provides users with an overview of the calculator's functionality, available modes, input formats, and example usage scenarios.

*/
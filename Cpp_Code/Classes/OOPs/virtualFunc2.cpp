#include<iostream>
#include <string>
using namespace std;

class EzBhai
{
    public :
    EzBhai(int a, int b, string c):follow(a),chanels(b),chanelNames(c){}
   
    protected :
    int follow,chanels;
    string chanelNames;

   public :

    virtual void disp(){

    }    
};

class EzSnip : public EzBhai
{
    public :
    EzSnip(int a, int b, int d,string c):ReelNo(d),EzBhai(a,b,c){}
    void disp(){
        std::cout << "This video is posted on" << chanelNames<< std::endl;
        cout<<"This is one of"<<ReelNo<<"Reels.."<<endl;
        std::cout << "Info (Reel) :" << std::endl;
        std::cout << "Total Number of channels :"<< chanels << std::endl;
    }    
    protected :
    int ReelNo;

};
class EzLive : public EzBhai
{
    public :
    int videoNo;
    EzLive(int a, int b, int d,string c):videoNo(d),EzBhai(a,b,c){}
   
    void disp(){
        std::cout << "This video is posted on" << chanelNames<< std::endl;
        cout<<"This is one of"<<videoNo<<"Videos.."<<endl;
        std::cout << "Info (vid) :" << std::endl;
        std::cout << "Total Number of channels :"<< chanels << std::endl;
    }    
};

int main()
{
    EzSnip objs(32,5,35,"EzSnippet");
    EzLive objl(132,5,35,"EzLive");
    EzBhai* ptrs =&objs;
    EzBhai*ptrl =&objl;
    ptrs->disp();
    ptrl->disp();
}
#include <iostream>
#include <string>
using namespace std;

class UserInfo;

class cred {
protected:
    string adminPin;
    string adminAccNo;

public:
    string userPin;
    string userAccNo;

    cred() {
        userPin = "0000";
        adminPin = "0000";
    }

    void setUserAccNo(string inpUserAccNo) {
        userAccNo = inpUserAccNo;
    }

    void setUserPin(string inpUserPin) {
        userPin = inpUserPin;
    }

    void setAdminAccNo(string inpAdminAccNo) {
        adminPin = inpAdminAccNo;
    }

    void setAdminPin(string inpAdminPin) {
        adminPin = inpAdminPin;
    }

    int UserCheckAccNo(string icheckNo) {
        return (userAccNo == icheckNo) ? 1 : 0;
    }

    int UserCheckPin(string icheckPin) {
        return (userPin == icheckPin) ? 1 : 0;
    }

    int AdminCheckAccNo(string icheckNo) {
        return (adminAccNo == icheckNo) ? 1 : 0;
    }

    int AdminCheckPin(string icheckPin) {
        return (adminPin == icheckPin) ? 1 : 0;
    }

    void UserCredDisplay() {
        cout << "Your Acc. No. is " << userAccNo << endl;
    }
};

class AdminDash {
private:
    string intrRate = "4";

protected:
    string IntrMon;

public:
    string SavMon;

    void AInitMon(int tempMon) {
        SavMon = to_string(tempMon);
    }

    void AIntrMonSet() {
        IntrMon = to_string(stoi(SavMon) + stoi(intrRate) / 100);
    }

    void AsearchUser(string userInp, cred *tempInp, UserInfo *tempUser);
    void AdMainDisp(cred* tempInp, UserInfo* tempUser);
};

class UserInfo :public AdminDash {
public:
    void UInitMon(string funcMon) {
        SavMon = funcMon;
    }

    void UserDisplay() {
        cout << "The Money In Your Account is :" << SavMon << endl;
    }

};

void AdminDash::AsearchUser(string userInp, cred *tempInp, UserInfo *tempUser) {
    if ((tempInp->userAccNo) == userInp) {
        AdMainDisp(tempInp, tempUser);
    }
    else {
        cout << "No Such Account No." << endl;
    }
}

void AdminDash::AdMainDisp(cred* tempInp, UserInfo* tempUser) {
    cout << "The UserNo is :" << tempInp->userAccNo << endl;
    cout << "The Password is :" << tempInp->userPin << endl;
    cout << "The Cash In this account is :" << tempUser->SavMon << endl;
}

int Mchoice;

int main() {
    // Variables and objects
    // Choice Vars
    int Uchoice;
    int Achoice;
    // User Cred Vars
    string UPin_S;
    string UAccNo_S;
    string UPin_L;
    string UAccNo_L;
    cred Ucred;
    cred *ptrUcred = &Ucred;

    // User Info Vars
    UserInfo User;
    UserInfo *UserPtr = &User;

    // Admin Cred Vars
    string APin_S;
    string AAccNo_S;
    string APin_L;
    string AAccNo_L;
    cred Acred;

    // AdminDash Vars
    AdminDash Admin;

    cout << "=========" << endl;
    cout << "Bank App" << endl;
    cout << "=========" << endl;

    MainLogin:
    // First Choice User/Admin
    cout << "Who are you ?" << endl;
    cout << "1.User..." << endl;
    cout << "2.Admin..." << endl;
    cout << "3.Exit...." << endl;
    cin >> Mchoice;

    do {
        switch (Mchoice) {
        case 1: // User Page
            cout << "1.Sign Up!" << endl;
            cout << "2.Log In!" << endl;
            cout << "3.Back" << endl;
            cin >> Uchoice;
            switch (Uchoice) {
            case 1: // Sign Up
                {
                    cout << "Enter A Account No.";
                    cin >> UAccNo_S;
                    Ucred.setUserAccNo(UAccNo_S);
                    cout << "Set A Account Pin";
                    cin >> UPin_S;
                    Ucred.setUserPin(UPin_S);
                    goto UserLogin;
                    break;
                }

            case 2: // Login Page
                UserLogin:
                int tempPL, tempNL;
                cout << "Enter Your account number" << endl;
                cin >> UAccNo_L;
                tempNL = Ucred.UserCheckAccNo(UAccNo_L);
                cout << "Enter Your account Pin" << endl;
                cin >> UPin_L;
                tempPL = Ucred.UserCheckPin(UPin_L);
                if (tempPL == 1) {
                    cout << "Autherized!!" << endl;
                    string tempSav;
                    if ((User.SavMon) <= "")
                                        {
                        system("cls");
                        cout << "How much money would you like to deposit ? ";
                        cin >> tempSav;
                        User.UInitMon(tempSav);
                    }
                    cout << "Your Account Details :" << endl;
                    Ucred.UserCredDisplay();
                    User.UserDisplay();
                }
                else {
                    cout << "\nUnauthorized!" << endl;
                    cout << "============" << endl;
                    goto MainLogin;
                }
                goto MainLogin;
                break;
            case 3:
                goto MainLogin;
            default:
                cout << "Wrong Choice!" << endl;
                break;
            }
            break;
        case 2: // Admin Page
            cout << "1.Sign Up!" << endl;
            cout << "2.Log In!" << endl;
            cout << "3.Back To Main Menu" << endl;
            cin >> Achoice;
            switch (Achoice) {
            case 1: // Sign up Admin!
                {
                    cout << "Enter A Account No.";
                    cin >> AAccNo_S;
                    Acred.setAdminAccNo(AAccNo_S);
                    cout << "Set A Account Pin";
                    cin >> APin_S;
                    Acred.setAdminPin(APin_S);
                }
            case 2: // Login Admin
                {
                    int tempPLA, tempNLA;
                    cout << "Enter Your account number" << endl;
                    cin >> AAccNo_L;
                    tempNLA = Acred.UserCheckAccNo(AAccNo_L);
                    cout << "Enter Your account Pin" << endl;
                    cin >> APin_L;
                    tempPLA = Acred.AdminCheckPin(APin_L);
                    if (tempPLA == 1) {
                        int ASubChoice;
                        cout << "Authorized As An Admin!" << endl;
                        cout << "What Do You Want to Do?" << endl;
                        cout << "=======================" << endl;
                        cout << "1.Check/Change An Account Info" << endl;
                        cout << "2.Back To Main" << endl;
                        cin >> ASubChoice;
                        if (ASubChoice == 1) {
                            string tempInpCheck;
                            char terChoice;
                            cout << "\nEnter Account Number: ";
                            cin >> tempInpCheck;
                            Admin.AsearchUser(tempInpCheck, ptrUcred, UserPtr);
                            std::cout << "Want to continue the program Y/N?" << std::endl;
                            cin>>terChoice;
                                if (terChoice=='y'||terChoice=='Y')
                                {
                                        goto MainLogin;
                                }
                                else
                                {
                                    break;
                                }
                                
                                
                        }
                    }
                    else {
                        cout << "Unauthorized!" << endl;
                        cout << "=============" << endl;
                    }
                    break;
                }
            case 3:
                cout << "You Choose to Exit" << endl;
                break;
            default:
                cout << "Wrong Choice Exiting Program" << endl;
                break;
            }
            break;
        }
    } while (Mchoice > 2);
    return 0;
}

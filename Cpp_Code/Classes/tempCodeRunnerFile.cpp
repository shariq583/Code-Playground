  BankDep (int p , int y ,int r)
    {
        pre = p;
        years = y;
        intr_rte = (r/100);
        res_val = pre;
         for (int i = 0; i < y; i++)
        {
            res_val = ((p * r) + p);
        }
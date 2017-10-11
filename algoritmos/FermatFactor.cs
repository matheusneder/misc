// baseado em https://www.vivaolinux.com.br/script/Algoritmo-de-Fatoracao-de-Fermat-(FFA)-em-C/

using System;

class FermatFactor
{
    static long Factor(long n)
    {
        long result;

        if(n == 0)
        {
            result = 0;
        }
        else if(n == 1)
        {
            result = 1;
        }
        else if(n % 2 == 0)
        {
            long halfN = n / 2;

            if (halfN > 2)
            {
                result = 2;
            }
            else
            {
                result = halfN;
            }
        }
        else
        {
            long i = n;
            long j = 0;
            long k = 0;

            do
            {

                i += j;
                k = (long)Math.Sqrt(i);

                // ainda ha como reduzir pela metade
                // o numero de repeticoes deste laco
                if (j == 0)
                {
                    j += 1;
                }
                else
                {
                    j += 2;
                }

            } while (i - k * k > 0);

            k += (j - 1) / 2;
            n /= k;

            if(n > k)
            {
                result = k;
            }
            else
            {
                result = n;
            }
        }

        return result;
    }

    static void Main(string[] args)
    {
        long n = 600851475143;
        long p = 1, q = 1, factor;

        do
        {

            p = Factor(n);

            do
            {   // este loop usa o fator encontrado anteriormente e se
                // assegura de que ele seja o menor 
                q = Factor(p);
                p /= q;
            } while (q > 1);

            // isto faz perder tempo, mas não retorna fatores compostos

            n /= p;

            if (p != 1)
            {
                factor = p;
            }
            else
            {
                factor = n;                    
            }

            Console.WriteLine(factor);

        } while (p > 1);

        Console.ReadKey();
    }
}


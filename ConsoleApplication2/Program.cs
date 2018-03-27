using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
namespace ConsoleApplication2
{
    class Program
    {

        public const int MOUSEEVENTF_LEFTDOWN = 0x02;
        public const int MOUSEEVENTF_LEFTUP = 0x04;
        static void Main(string[] args)
        {
            while (true)
            {
                var curr = new Cursor(Cursor.Current.Handle);
                Cursor.Position = new System.Drawing.Point(new Random().Next(0, 2000), new Random().Next(0, 1000));
            }
        }

    }
}

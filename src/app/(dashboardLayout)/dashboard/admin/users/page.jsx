
import Image from "next/image";
import {
  Card,
  Table,
  TableContent,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip
} from "@heroui/react";

const AdminUsersTable = () => {

  //  const { data: session } = useSession();
  //   const user = session?.user;
  //   console.log("The user is a", user);


  const users = [
    {
      _id: "u1",
      name: "Hridoy Akanda",
      email: "hridoyakanda@gmail.com",
      role: "attendee",
      isBlocked: false,
      image: "https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-6/569923515_122105590827057745_5704713662004147032_n.jpg?stp=dst-jpg_tt6&cstp=mx333x336&ctp=s333x336&_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=F-Xk3oE1E4MQ7kNvwG3XBN8&_nc_oc=Adqot1cjtWXGCQW11WbE5GbkS-31gNkUKIFMxo6P8SYq2Pbb3V1VK0Pgszq4XvkiBmE&_nc_zt=23&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=ulHsd9mweHlMLSHo1fFm2g&_nc_ss=7b2a8&oh=00_Af8LpBouwdoIsaNfgAW_hYNIIcOZ_IvZUyYqU2fsIzqs3Q&oe=6A46C881"
    },
    {
      _id: "u2",
      name: "Ishrat Jahan Jecika",
      email: "ishratJahnajeci@gmail.com",
      role: "organizer",
      isBlocked: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqM6GKlr42zy0RolT0AKqR3bKd3M-ApmJrA&s"
    },
    {
      _id: "u3",
      name: "Jr. Milton",
      email: "jrmilton@gmail.com",
      role: "attendee",
      isBlocked: true,
      image: "https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-6/636261693_122121365823057745_7533436722181381533_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2039&ctp=s2048x2039&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rx7vg2i04DQQ7kNvwESRle-&_nc_oc=Adot-_6ZlKHTQczwzK4xH672N7aYFSK6n8D1iRD9EYpvsoJb8cIPyJNQv_ge5B9Zvb8&_nc_zt=23&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=aBSe_tw_sRgx-Imx9Mcr7w&_nc_ss=7b2a8&oh=00_Af_fa2BDtKoSeygXW-cP4XHndl8qoPz1K07xJ-eC6v1GWg&oe=6A46B70D"
    }
  ];

  return (
    <Card className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl p-6 rounded-2xl">
      <div className="p-0 overflow-x-auto">
        <Table aria-label="Users table" className="min-w-[900px] w-full text-left border-collapse" removeWrapper>
          <TableContent>
            <TableHeader className="bg-slate-950/40 border-b border-white/5 rounded-t-xl">
              <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20">AVATAR</TableColumn>
              <TableColumn isRowHeader className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20">NAME</TableColumn>
              <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20">EMAIL</TableColumn>
              <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20">ROLE</TableColumn>
              <TableColumn className="py-4 px-6 text-slate-400 font-extrabold uppercase text-[11px] tracking-wider border-b border-white/5 bg-slate-950/20">STATUS</TableColumn>
            </TableHeader>
            <TableBody emptyContent={<p className="text-slate-500 py-10 text-center font-medium">No users found</p>}>
              {users.map((usr) => (
                <TableRow key={usr._id} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150 last:border-b-0">
                  <TableCell className="py-4 px-6 align-middle text-slate-300">
                    <div className="h-10 w-10 relative">
                      <Image
                        fill
                        src={
                          usr.image && (usr.image.startsWith("http") || usr.image.startsWith("/"))
                            ? usr.image
                            : "https://images.unsplash.com/photo-1549880181-56a44cf8a4a1"
                        }
                        className="rounded-full object-cover border border-white/10"
                        alt="avatar"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-6 align-middle font-semibold text-white">
                    {usr.name}
                  </TableCell>
                  <TableCell className="py-4 px-6 align-middle text-slate-300 font-medium">
                    {usr.email}
                  </TableCell>
                  <TableCell className="py-4 px-6 align-middle">
                    <Chip
                      size="sm"
                      className={`font-bold uppercase text-[10px] tracking-wider border px-2.5 py-1 ${usr.role === "admin"
                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        : usr.role === "organizer"
                          ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                          : "bg-green-500/10 text-green-400 border-green-500/20"
                        }`}
                    >
                      {usr.role}
                    </Chip>
                  </TableCell>
                  <TableCell className="py-4 px-6 align-middle">
                    <Chip
                      size="sm"
                      className={`font-bold uppercase text-[10px] tracking-wider border px-2.5 py-1 ${usr.isBlocked
                        ? "bg-red-500/10 text-red-400 border-red-500/20"
                        : "bg-green-500/10 text-green-400 border-green-500/20"
                        }`}
                    >
                      {usr.isBlocked ? "Blocked" : "Active"}
                    </Chip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContent>
        </Table>
      </div>
    </Card>
  );
};

export default AdminUsersTable;
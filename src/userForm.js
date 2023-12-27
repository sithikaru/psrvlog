import { Button, Grid, Input, Typography } from "@mui/material";


const UserForm=props=>{
    return(
        <div className="border bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-[#87f8cd6d] hover:shadow-2xl">
          <Grid
            container
            spacing={2}
            className="bg-white mb-[30px] block "
          >
            <Grid
                item
                xs={12}
                className=""
            >
                <Typography component={'h1'} className="text-black">
                    User Form
                </Typography>
            </Grid>
            <Grid
            item
            xs={12}
            sm={6}
            className="flex"
            >
                <Typography component={"label"} htmlFor="id" className="text-xl text-gray-900 mr-[20px] w-24 block">ID</Typography>
                <Input 
                    type="number"
                    id="id"
                    name="id"
                    className="w-[400px]"
                    value={''}
                    onChange={e=>{}}
                    
                />
            </Grid>
            <Grid
            item
            xs={12}
            sm={6}
            className="flex"
            >
                <Typography component={"label"} htmlFor="name" className="text-xl text-gray-900 mr-[20px] w-24 block">Name</Typography>
                <Input 
                    type="text"
                    id="name"
                    name="name"
                    className="w-[400px]"
                    value={''}
                    onChange={e=>{}}
                    
                />
            </Grid>
            <Button
            className="m-auto mb-5 bg-teal-500 text-black ml-4 mt-5 hover:scale-110 "
            >
                Add
            </Button>
          </Grid>
        </div>
    );
}

export default UserForm
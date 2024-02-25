import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UserList from "../UserList";
import SubmissionList from "../SubmissionList";
import EditTaskCard from "../EditTaskCard";

const role = "ROLE_ADMIN";

const TaskCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openUserList, setOpenUserList] = useState(false);
  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const [openUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);

  const handleCloseUserList = () => {
    setOpenUserList(false);
  };

  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
  };

  const handleCloseUpdateTaskModal = () => {
    setOpenUpdateTaskForm(false);
  };

  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleMenuClose();
  };
  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
    handleMenuClose();
  };
  const handleOpenUpdateTaskModal = () => {
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };
  const handleDeleteTask = () => {    
    handleMenuClose();
  };

  return (
    <div>
      <div className="card lg:flex justify-between w-full">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="">
            <img
              alt=""
              className="lg:w-[7rem] lg:h-[7rem] object-cover rounded-md"
              src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
            ></img>
          </div>
          <div className="space-y-5 ">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Using latest web frameworks
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {[1, 1, 1].map((item) => (
                <span className="py-5 px-1 rounded-full techStack">
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
            {role === "ROLE_ADMIN" ? (
              <>
                <MenuItem onClick={handleOpenUserList}>Assign User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModal}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>
      <UserList open={openUserList} handleClose={handleCloseUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloseSubmissionList}
      />
      <EditTaskCard
        open={openUpdateTaskForm}
        handleClose={handleCloseUpdateTaskModal}
      />
    </div>
  );
};

export default TaskCard;

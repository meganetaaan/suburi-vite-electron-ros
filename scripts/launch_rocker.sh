#!/bin/bash

rocker --privileged --home --user --network host --x11 osrf/ros:humble-desktop --volume /dev:/dev --volume /var/run/dbus/system_bus_socket:/var/run/dbus/system_bus_socket

FROM ros:humble-ros-base
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    curl \
    libx11-xcb1 \
    libxcb-dri3-0 \
    libxtst6 \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libxss1 \
    libxshmfence1 \
    libgbm-dev \
    libasound2 \
    libglu1 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN curl -SL https://deb.nodesource.com/setup_21.x | bash \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG USERNAME=appuser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME
USER $USERNAME

RUN echo "\n\
echo 'Sourcing ROS2 packages...'\n\
source /opt/ros/humble/setup.sh \n\
" >> $HOME/.bashrc
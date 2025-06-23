# escape=\

ARG NVM_VERSION=v0.40.3

FROM bitnami/minideb:bookworm

ARG NVM_VERSION

SHELL [ "/bin/bash", "-c" ]

# Force bash as OCI doesn't contain SHELL, so not in Podman https://docs.podman.io/en/latest/markdown/podman-build.1.html#format
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN \
  # nounset - Treat unset variables as an error when substituting
  # xtrace - Print commands and their arguments as they are executed
  set -o nounset -o xtrace && \
  # Install dependencies for git. ssh enables commit signing
  install_packages ca-certificates ssh && \
  # Prepare nodejs 16
  install_packages curl && \
  # Install toad-reader-apps dependencies (part 1)
  install_packages ruby && \
  # Setup vscode https://github.com/microsoft/vscode/issues/189924
  install_packages locales && \
  sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  dpkg-reconfigure --frontend=noninteractive locales && \
  update-locale LANG=en_US.UTF-8 && \
  # user setup
  useradd --create-home --user-group --shell /bin/bash developer

# npm < 9 changes user running process to match folder https://github.com/npm/cli/issues/4589
USER developer

WORKDIR /home/developer

COPY .nvmrc .

RUN \
  # nounset - Treat unset variables as an error when substituting
  # xtrace - Print commands and their arguments as they are executed
  set -o nounset -o xtrace && \
  # Install nodejs 16
  bash -c "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh | bash" && \
  source ~/.bashrc && \
  # "source ~/.nvm/nvm.sh" fails if node isn't installed
  source ~/.nvm/nvm.sh || nvm install --default --latest-npm && \
  # Install toad-reader-apps dependencies (part 2)
  npm config set script-shell bash
#!/bin/bash

echo ""

TENANT_ITEMS=("app.json" "assets")
TENANT_TO_SWITCH_TO=$1

if [ ! -d "tenants/$TENANT_TO_SWITCH_TO" ]; then
  echo "Invalid tenant."
  # ask if they want to create a new tenant?

elif [ ! "$(ls -A tenants/$TENANT_TO_SWITCH_TO)" ]; then
  echo "This tenant appears to already be selected."

else

  for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
    if [ ! -d "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ] && [ ! -f "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ]; then
      INVALID_TENANT_DIR_CONTENTS=1
    fi
  done
  
  if [ $INVALID_TENANT_DIR_CONTENTS ]; then
    echo "The directory for this tenant does not have the required contents."

  else

    # find the empty tenant dir (this is the current tenant)
    for i in tenants/* ; do
      if [ ! "$(ls -A $i)" ]; then
        if [ $CURRENT_TENANT ]; then
          echo "ERROR: multiple empty tenant directories!"
          exit 1
        fi
        CURRENT_TENANT=$(basename $i)
      fi
    done

    # if there is no empty tenant dir, then we do not know who the current tenant is
    if [ ! $CURRENT_TENANT ]; then
      echo "ERROR: no empty tenant directory!"
      exit 1
    fi

    ##### everything checks out, now we make the switch #####

    # move current tenant items to the empty dir
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      mv ./$TENANT_ITEM "tenants/$CURRENT_TENANT/$TENANT_ITEM" || exit 1;
    done

    # move current tenant items to the empty dir
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      mv "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ./$TENANT_ITEM || exit 1;
    done

    echo "Changed tenant to $TENANT_TO_SWITCH_TO."
  fi
fi

echo ""